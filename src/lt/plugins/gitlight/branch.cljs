(ns lt.plugins.gitlight.branch
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [clojure.string :as string]
            [lt.plugins.gitlight.git :as git]
            [lt.plugins.gitlight.execute :as exec]
            [lt.plugins.gitlight.common-ui :as cui]
            [lt.plugins.gitlight.remote-com :as remcom])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn checkout-button [branch]
  (cui/make_button branch "checkout branch" git-checkout))

(defn pull-button [branch]
  (cui/make_button "pull!" branch (fn [x y] (remcom/git-pull))))

(defn merge-button [branch]
  (cui/make_button "merge" branch git-merge))

(defn push-button [branch]
  (cui/make_button "push it!" branch git-push-it!))

(defn new-branch-button []
  (cui/make_button "make a new branch" nil git-new-branch))

(defn delete-branch-button [branch]
  (cui/make_button "delete" branch git-delete-branch))



(defui branch-panel [this]
  (let [results (:results @this)]
    [:div.gitlight-branches [:h1 "Branches"]
     [:table
      (for [parsed (parse-data (first results))
            :let [[this-one? [branch sha1 desc]] parsed]]
        [:tr
         [:td (if this-one? "->" (delete-branch-button branch))]
         [:td {:class (if this-one?
                        "current"
                        "not-current")} (checkout-button branch)]
         (if this-one?
           [:td.pull (pull-button branch)]
           [:td.merge (merge-button branch)])
         [:td sha1]
         [:td.push (push-button branch)]
         [:td desc]])
      [:tr
       [:td]
       [:td.new-branch (new-branch-button)]]
      ]
     [:hr]
     [:div (rest results)]

     ]))



(defn git-branch-splitter [line]
  (let [active? (= \* (first line))
        to_cut  (subs line 2)
        splitted (string/split to_cut #"\s+" 3)]
      [active? splitted]))



(defn parse-data [data]
  (let [lines (string/split-lines (.toString data))]
    (map git-branch-splitter lines)))



(def git-branch-output (cui/make-output-tab-object "Git branches" ::gitlight-branches branch-panel))


(defn git-branches []
  (exec/runfuns git-branch-output
                [#(git/git-command % "branch" "--no-color" "-vv")
                 #(git/git-command % "stash" "list")]
   ))


(defn git-branches2 []
  (git/git-command git-branch-output "branch" "--no-color" "-vv"))



(defn git-merge [action branch]
  (git/git-command-ignore-out "merge" branch)
  (git-branches))



(defn git-checkout [branch action]
  (git/git-command-ignore-out "checkout" branch)
  (git-branches))



(defn git-push-it! [action branch]
  (remcom/git-push-remote-branch "origin" branch)
  (git-branches))



(defn git-new-branch [action branch]
  (cui/input-popup "new branch name" "create" git-create-new-branch))



(defn git-create-new-branch [branch]
  (git/git-command-ignore-out "branch" branch)
  (git-branches))


(defn git-delete-branch [action branch]
  (git/git-command-ignore-out "branch" "-D" branch)
  (git-branches))


(cmd/command {:command ::branches
              :desc "gitlight: branches"
              :exec git-branches})


