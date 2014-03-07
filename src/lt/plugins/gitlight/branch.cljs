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



(defn git-branch-splitter [line]
  (let [active? (= \* (first line))
        to_cut  (subs line 2)
        splitted (string/split to_cut #"\s+" 3)]
      [active? splitted]))


(defui branch-panel [this]
  [:div.gitlight-branches [:h1 "Branches"]
   [:table
    (for [[this-one? [branch sha1 desc]] (:results @this)]
      [:tr
       [:td.merge (if this-one? "->" "")]
       [:td {:class (if this-one? "current" "not-current")}
        (cui/make_button branch "checkout branch" git-checkout)]
       [:td (if this-one? "" (cui/make_button "merge" branch git-merge))]
       [:td sha1]
       [:t (cui/make_button "push it!" branch git-push-it!)]
       [:td desc]])]])


(behavior ::refresh-results
          :triggers #{:refresh}
          :reaction (fn [this]
                      (let [new-cnt (branch-panel this)]
                        (cui/dom-reset (dom/parent (:content @this)) new-cnt)
                        (object/merge! this {:content new-cnt} ))))




(behavior ::git-branch.out
          :triggers #{:proc.out}
          :reaction (fn [obj data]
                      (let [lines (string/split-lines (.toString data))
                            splitted (map git-branch-splitter lines)]
                        (tabs/add-or-focus! branches-out)
                        (object/merge! branches-out {:results splitted})
                        (object/raise branches-out :refresh))))


(object/object* ::branches.out
                :tags [:gitlight-branches.out]
                :name "git branches out"
                :results []
                :behaviors [:lt.plugins.gitlight.common-ui/on-close-destroy
                            ::refresh-results]
                :init (fn [this]
                        (branch-panel this)))

(object/object* ::git-branch-output
                :tags #{::git-branch-output}
                :behaviors [::git-branch.out])


(def git-branch-output (object/create ::git-branch-output))

(def branches-out (object/create ::branches.out))


(defn git-branches []
  (git/git-command git-branch-output "branch" "--no-color" "-vv"))


(defn git-merge [action branch]
  (git/git-ignore-out "merge" branch)
  (git-branches))


(defn git-checkout [branch action]
  (git/git-command-ignore-out "checkout" branch)
  (git-branches))


(defn git-push-it! [action branch]
  (remcom/git-push-remote-branch "origin" branch)
  (git-branches))



(cmd/command {:command ::branches
              :desc "gitlight: branches"
              :exec git-branches})


