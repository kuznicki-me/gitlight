(ns lt.plugins.gitlight.branch
  (:require [lt.object :as object]
            [lt.objs.popup :as popup]
            [lt.objs.context :as ctx]
            [lt.objs.command :as cmd]
            [lt.objs.proc :as proc]
            [lt.objs.tabs :as tabs]
            [lt.util.dom :as dom]
            [clojure.string :as string]
            [lt.plugins.gitlight.git :as git]
            [lt.plugins.gitlight.common-ui :as cui]
            [lt.plugins.gitlight.remote-com :as remcom])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defui branch-panel [this]
  [:div.gitlight-branches [:h1 "Branches"]
   [:table
    (for [[this-one? [branch sha1 desc]] @(:results @this)]
      [:tr
       [:td (if this-one? "->" "")]
       [:td {:class (if this-one? "current" "not-current")}
             (cui/make_button branch "checkout branch" git-checkout)]
       (if this-one?
         [:td.pull (cui/make_button "pull!" branch (fn [x y] (remcom/git-pull)))]
         [:td.merge (cui/make_button "merge" branch git-merge)])
       [:td sha1]
       [:td.push (cui/make_button "push it!" branch git-push-it!)]
       [:td desc]])
    [:tr
     [:td]
     [:td.new-branch (cui/make_button "make a new branch" nil git-new-branch)]]
    ]])


(defn git-branch-splitter [line]
  (let [active? (= \* (first line))
        to_cut  (subs line 2)
        splitted (string/split to_cut #"\s+" 3)]
      [active? splitted]))



(defn parse-data [data]
  (let [lines (string/split-lines (.toString data))]
    (map git-branch-splitter lines)))



(def git-branch-output (cui/make-output-tab-object "Git branches" ::gitlight-branches parse-data branch-panel))



(defn git-branches []
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
  (cui/input-popup "new branch name" "create" git-create-new-branch)
  (git-branches))



(defn git-create-new-branch [branch]
  (git/git-command-ignore-out "branch" branch)
  (git-branches))



(cmd/command {:command ::branches
              :desc "gitlight: branches"
              :exec git-branches})


