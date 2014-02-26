(ns lt.plugins.gitlight.tests.status.back
  (:require [lt.object :as object]
            [lt.objs.files :as files]
            [lt.plugins.gitlight.status.back :as back]
            [lt.plugins.gitlight :refer [config]]
            [lt.plugins.gitlight.tests.lib :as t]
            [lt.plugins.gitlight.git :as git]
            [lt.objs.plugins :as plugins]
            [lt.objs.command :as cmd]
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



(defn test-data [pair]
  (let [[n what] pair
        [tst parsed] what
        [X Y filename] tst
        d (nth data n)
        what-should-be (sort (map (partial change-filenames filename) d))
        what-is (sort parsed)]
    (= what-should-be what-is)))


(defn generate-test-data []
  (for [x [" " "M" "A" "R" "C" "D" "U"]
        y [" " "M" "A" "D" "U"]]
    (let [filename (random-str)]
      [[x y filename] (back/get-status-for-line (str x y " " filename))])))


(defn run-tests [] (every? identity
                           (map test-data
                                (map-indexed vector (generate-test-data)))))


(t/def-test ::back-tests
            (fn []
              (t/asrt "git status parse porcelain" (run-tests))))




;; git path test

(t/def-test ::does-git-path-even-point-to-something?
            (fn []
              (t/asrt "path to git exec" (files/file? (:git-binary @config)))))





;; testing git status command

;; obejcts and behaviors necessary for mkgit
(def git-test-repo
  (object/create
   (object/object*
    ::git-test-repo-out
    :tags [:git-test-repo-out]
    :behaviors [::git-test-repo.out])))



(behavior ::git-test-repo.out
          :desc "git test repo out"
          :triggers #{:proc.out}
          :reaction (fn [ obj data ]
                      (test-git-status (.toString data))))


(defn mkgit []
  (proc/exec {:command (str plugins/user-plugins-dir "/gitlight/src/lt/plugins/gitlight/tests/status/mkgit.sh")
              :obj     git-test-repo}))


;; running the actual status command

(def test-git-status-out
  (object/create
   (object/object*
    ::test-git-status-out
    :tags [:test-git-status-out]
    :behaviors [::test-git-status.out])))



(behavior ::test-git-status.out
          :desc "When git status is executed, parse its output."
          :triggers #{:proc.out}
          :reaction (fn [ obj data ]
                      (print (.toString data))))


(defn test-git-status [cwd]
  (println cwd)
  (git/git-command-cwd test-git-status-out cwd "status" "--porcelain" "--branch"))

;; helper

(cmd/command {:command :mkgit
              :desc "gitlight: mkgit"
              :exec mkgit})

