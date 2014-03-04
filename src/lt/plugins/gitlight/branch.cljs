(ns lt.plugins.gitlight.branch
  (:require [lt.object :as object]
            [lt.objs.popup :as popup]
            [lt.objs.context :as ctx]
            [lt.objs.command :as cmd]
            [lt.objs.proc :as proc]
            [lt.objs.tabs :as tabs]
            [lt.util.dom :as dom]
            [clojure.string :as string]
            [lt.plugins.gitlight.git :as git])
  (:require-macros [lt.macros :refer [defui behavior]]))



(defn git-branch-splitter [line]
  (let [active? (= \* (first line))
        to_cut  (subs line 2)
        splitted (string/split to_cut #"\s+" 3)]
      [active? splitted]
      )

  )



(defn dom-truncate [node]
  (set! (.-innerHTML node) ""))

(defn dom-reset [node new-cnt]
  (dom-truncate node)
  (dom/append node new-cnt))


(defui branch-panel [this]
  [:div [:h1 "Branches"]
   [:table
    (for [[this-one? [branch sha1 desc]] (:results @this)]
      [:tr
       [:td this-one?]
       [:td branch]
       [:td sha1]
       [:td desc]])]])


(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))




(behavior ::refresh-results
          :triggers #{:refresh}
          :reaction (fn [this]
                      (println "refreshing")
                      (let [new-cnt (branch-panel this)]
                        (dom-reset (dom/parent (:content @this)) new-cnt)
                        (object/merge! this {:content new-cnt} ))))




(behavior ::git-branch.out
          :triggers #{:proc.out}
          :reaction (fn [obj data]
                      (let [lines (string/split-lines (.toString data))
                            splitted (reverse (sort (map git-branch-splitter lines)))]
                        (tabs/add-or-focus! branches-out)
                        (object/merge! branches-out {:results splitted})
                        (object/raise branches-out :refresh))))


(object/object* ::branches.out
                :tags [:gitlight-branches.out]
                :name "branches out"
                :results []
                :behaviors [::on-close-destroy ::refresh-results]
                :init (fn [this]
                        (branch-panel this)))

(object/object* ::git-branch-output
                :tags #{::git-branch-output}
                :behaviors [::git-branch.out])


(def git-branch-output (object/create ::git-branch-output))

(def branches-out (object/create ::branches.out))


(defn git-branches []
  (git/git-command git-branch-output "branch" "--no-color" "-vv"))


(cmd/command {:command ::branches
              :desc "gitlight: branches"
              :exec git-branches})
