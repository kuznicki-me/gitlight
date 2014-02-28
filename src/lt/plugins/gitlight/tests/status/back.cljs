(ns lt.plugins.gitlight.tests.status.back
  (:require [lt.object :as object]
            [lt.objs.files :as files]
            [lt.plugins.gitlight.status.back :as back]
            [lt.plugins.gitlight :refer [config]]
            [lt.plugins.gitlight.tests.lib :as t]
            [lt.plugins.gitlight.git :as git]
            [lt.objs.plugins :as plugins]
            [lt.objs.command :as cmd]
            [clojure.string :as string]
            [lt.objs.proc :as proc])
  (:require-macros [lt.macros :refer [defui behavior]]))

;; parsing of output of git command

(defn random-str []
  (let [r (+ 10 (rand-int 10))]
    (apply str (repeatedly r #(char (+ (rand-int 26) 97))))))


(def data
    ;; ' ' ' '
  '(()
    ;; ' ' 'M'
    ((:filename :modified :not-staged))
    ;; ' ' 'A'
    ()
    ;; ' ' 'D'
    ((:filename :deleted :not-staged))
    ;; ' ' 'U'
    ()
    ;; 'M' ' '
    ((:filename :modified :staged))
    ;; 'M' 'M'
    ((:filename :modified :staged) (:filename :modified :not-staged))
    ;; 'M' 'A'
    ()
    ;; 'M' 'D'
    ((:filename :modified :staged) (:filename :deleted :not-staged))
    ;; 'M' 'U'
    ()
    ;; 'A' ' '
    ((:filename :newfile :staged))
    ;; 'A' 'M'
    ((:filename :newfile :staged) (:filename :modified :not-staged))
    ;; 'A' 'A'
    ((:filename :unmerged-both-added :merge-conflict))
    ;; 'A' 'D'
    ((:filename :newfile :staged) (:filename :deleted :not-staged))
    ;; 'A' 'U'
    ((:filename :unmerged-added-by-us :merge-conflict))
    ;; 'R' ' '
    ((:filename :renamed :staged))
    ;; 'R' 'M'
    ((:filename :renamed :staged) (:filename :modified :not-staged))
    ;; 'R' 'A'
    ()
    ;; 'R' 'D'
    ((:filename :renamed :staged) (:filename :deleted :not-staged))
    ;; 'R' 'U'
    ()
    ;; 'C' ' '
    ((:filename :copied :staged))
    ;; 'C' 'M'
    ((:filename :copied :staged) (:filename :modified :not-staged))
    ;; 'C' 'A'
    ()
    ;; 'C' 'D'
    ((:filename :copied :staged) (:filename :deleted :not-staged))
    ;; 'C' 'U'
    ()
    ;; 'D' ' '
    ((:filename :deleted :staged))
    ;; 'D' 'M'
    ((:filename :deleted :staged) (:filename :modified :not-staged))
    ;; 'D' 'A'
    ()
    ;; 'D' 'D'
    ((:filename :unmerged-both-deleted :merge-conflict))
    ;; 'D' 'U
    ((:filename :unmerged-deleted-by-us :merge-conflict))
    ;; 'U' ' '
    ()
    ;; 'U' 'M'
    ()
    ;; 'U' 'A'
    ((:filename :unmerged-added-by-them :merge-conflict))
    ;; 'U' 'D'
    ((:filename :unmerged-deleted-by-them :merge-conflict))
    ;; 'U' 'U'
    ((:filename :unmerged-both-modified :merge-conflict))))


(defn change-filenames [filename x]
  (into [] (map #(if (= :filename %)
                  filename
                  %) x)))


(t/def-test ::back-tests
            (fn []

              (defn test-data [pair]
                (let [[n what] pair
                      [tst parsed] what
                      [X Y filename] tst
                      d (nth data n)
                      what-should-be (sort (map (partial change-filenames filename) d))
                      what-is (sort parsed)
                      tst (= what-should-be what-is)]
                  (if-not tst
                    (t/asrt (str "parsing porcelain: `"X"' `"Y"'") tst))
                  tst))


              (defn generate-test-data []
                (for [x [" " "M" "A" "R" "C" "D" "U"]
                      y [" " "M" "A" "D" "U"]]
                  (let [filename (random-str)]
                    [[x y filename] (back/get-status-for-line (str x y " " filename))])))


              (defn run-tests [] (every? identity
                                         (map test-data
                                              (map-indexed vector (generate-test-data)))))

              (t/asrt "git status parse porcelain" (run-tests))))




;; git path test

(t/def-test ::does-git-path-even-point-to-something?
            (fn []
              (t/asrt "path to git exec" (files/file? (:git-binary @config)))))


;; git add and reset tests

(def status-regexp
   #"## master\n( M not-staged-...\n){5}(M  staged-...\n){5}A  unstage_me\n\?\? stage_me\n\?\? trash\n(\?\? untracked-...\n){5}")

(def what-status-should-look-like
   #"## master\n( M not-staged-...\n){5}A  stage_me\n(M  staged-...\n){5}\?\? unstage_me\n(\?\? untracked-...\n){5}")



(t/def-test ::git-add-and-reset-test
  (fn []
    (do
      (behavior ::git-test-repo.out
                :desc "git test repo out"
                :triggers #{:proc.out}
                :reaction (fn [ obj data ]
                            (reset! (:cwd @test-git-status-out) (.toString data))
                            (test-git-status (.toString data))))


      (behavior ::test-git-status.out
                :desc "When git status is executed, parse its output."
                :triggers #{:proc.out}
                :reaction (fn [ obj data ]
                              (let [matched (re-matches status-regexp (.toString data))
                                    cwd @(:cwd @obj)]

                                (git/git-command-cwd git/git-ignore-out cwd "add" "stage_me")
                                (git/git-command-cwd git/git-ignore-out cwd "reset" "unstage_me")
                                (files/delete! (str cwd "/" "trash"))

                                ;; test
                                (t/asrt "status of test git repo " (not (nil? matched)))
                                (git/git-command-cwd after-add-reset-rm-out cwd "status" "--porcelain" "--branch")))))

      (behavior ::after-add-reset-rm.out
                :desc "When git status is executed after add and reset parse its output."
                :triggers #{:proc.out}
                :reaction (fn [ obj data ]
                            (let [matched-after (re-matches what-status-should-look-like (.toString data))]
                              (t/asrt "status of test git repo after add and reset" (not (nil? matched-after))))))

      (def git-test-repo
        (object/create
         (object/object*
          ::git-test-repo-out
          :tags [:git-test-repo-out]
          :behaviors [::git-test-repo.out])))


      (def test-git-status-out
        (object/create
         (object/object*
          ::test-git-status-out
          :cwd (atom nil)
          :tags [:test-git-status-out]
          :behaviors [::test-git-status.out])))


      (def after-add-reset-rm-out
        (object/create
         (object/object*
          ::after-add-reset-rm-out
          :cwd (atom nil)
          :tags [:after-add-reset-rm-out]
          :behaviors [::after-add-reset-rm.out])))

      (defn test-git-status [cwd]
        (git/git-command-cwd test-git-status-out cwd "status" "--porcelain" "--branch"))

      (proc/exec {:command (str plugins/user-plugins-dir "/gitlight/src/lt/plugins/gitlight/tests/status/mkgit.sh")
                  :obj     git-test-repo})))
