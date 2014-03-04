(ns lt.plugins.gitlight.commit
  (:require [lt.object :as object]
            [lt.objs.popup :as popup]
            [lt.objs.context :as ctx]
            [lt.objs.command :as cmd]
            [lt.objs.proc :as proc]
            [lt.util.dom :as dom]
            [clojure.string :as string]
            [lt.plugins.gitlight.git :as git])
  (:require-macros [lt.macros :refer [defui behavior]]))



(object/object* ::git-branch-output
                :tags #{::git-branch-output}
                :behaviors [::git-branch.out])


(defn git-branch-splitter [line]
  (let [active? (= \* (first line))
        to_cut  (subs line 2)
        splitted (string/split to_cut #"\s+" 2)]
    (if active?
      [:active splitted]
      [:not-active splitted]
      )

  ))

(behavior ::git-branch.out
          :triggers #{:proc.out}
          :reaction (fn [obj data]
                      (let [lines (string/split-lines (.toString data))
                            splitted (map git-branch-splitter lines)]
                        (println splitted)

                        )

                      ))



(def git-branch-output (object/create ::git-branch-output))


(cmd/command {:command ::branches
              :desc "gitlight: branches"
              :exec git-branches})


(defn git-branches []
  (git/git-command git-branch-output "branch" "--no-color" "-vv"))


(defn git-commit []
  (popup/popup! {:header  "commit message plz"
                 :body (input commit-input)
                 :buttons [{:label "commit"
                            :action (fn []
                                      (git-cmd-commit @(:commit @commit-input))
                                      (reset! (:commit @commit-input) nil))}
                           {:label "cancel"
                            :action (fn [] reset! (:commit @commit-input) nil)}]}))

(defn git-cmd-commit [msg]
  (git/git-command-ignore-out "commit" "-m" msg))
