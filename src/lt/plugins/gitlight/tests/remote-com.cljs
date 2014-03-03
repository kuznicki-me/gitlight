(ns lt.plugins.gitlight.tests.remote-com
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

(t/def-test ::git-fetch-pull-commit-push-test
  (fn []
    (do
      (behavior ::git-test-repo.out
                :desc "git test repo out"
                :triggers #{:proc.out}
                :reaction (fn [ obj data ]
                            (println (.toString data))
                            (let [cwd (.toString data)]
                              (reset! (:cwd @git-test-exit-status) cwd)
                              (reset! (:command @git-test-exit-status) "fetch")
                              (git/git-command-cwd git-test-exit-status cwd "fetch"))

                              ))

      (defn after [text cwd data & what_next]
        (println text cwd data what_next)
        (t/asrt text (= 0 data))
        (if (= 0 data)
          (do (reset! (:command @git-test-exit-status) (first what_next))
          (apply (partial git/git-command-cwd git-test-exit-status cwd) what_next))))


      (behavior ::git-test-exit-status.out
                :desc "git test repo out"
                :triggers #{:proc.exit}
                :reaction (fn [ obj data ]
                            (println "hello")
                            (let [cwd @(:cwd @obj)]
                              (case @(:command @obj)
                                      "fetch" (after "git fetch" cwd data "pull")
                                      "pull" (after "git pull" cwd data "add" "push_me")
                                      "add" (after "git add" cwd data "commit" "-m" "commiting")
                                      "commit" (after "git commit" cwd data "push")
                                      "push" (t/asrt "git push" (= 0 data)))
                              )))


      (def git-test-exit-status
        (object/create
         (object/object*
          ::git-test-exit-status
          :cwd (atom nil)
          :command (atom nil)
          :tags [:git-test-exit-status]
          :behaviors [::git-test-exit-status.out])))




      (def git-test-repo
        (object/create
         (object/object*
          ::git-test-repo-out
          :tags [:git-test-repo-out]
          :behaviors [::git-test-repo.out])))



      (defn test-git-status [cwd]
        (git/git-command-cwd test-git-status-out cwd "status" "--porcelain" "--branch"))


      (def dir (str plugins/user-plugins-dir "/gitlight/src/lt/plugins/gitlight/tests/status/"))

      (proc/exec {:command (str dir "mkremote.sh")
                  :cwd dir
                  :obj     git-test-repo}))))
