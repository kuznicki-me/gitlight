(ns lt.plugins.gitlight.status.ui
  (:require [lt.object :as object]
            [lt.plugins.gitlight.status.back :as back]
            [lt.objs.sidebar :as sidebar]
            [lt.objs.console :as console]
            [lt.objs.popup :as popup]
            [lt.objs.tabs :as tabs]
            [lt.util.dom :as dom]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn resize-rightbar [width]
  (object/merge! tabs/multi {(:side @sidebar/rightbar) width})
  (object/merge! sidebar/rightbar {:width width :max-width width}))


(def group-names {:not-staged "Not staged"
                  :staged     "Staged"
                  :untracked  "Untracked"
                  :ignored    "Ignored" })


(defn dom-scroll-width [n]
  (.-scrollWidth n))



(defn resize-to-content [parent child]
  (resize-rightbar (+
                    (- (dom/width parent) (dom/width child)) ; tipical size diff between parent and a child
                    (dom-scroll-width child))))



(defn dom-trunkate [node]
  (set! (.-innerHTML node) ""))



(defui group [g-name files]
  [:li {:class (name g-name)} [:h1 (g-name group-names)]
   [:ul.files (map (partial file g-name) files)]])



(defui button [n f]
  [:button n]
  :click (fn [] (popup/popup!
                 {:header "Are you sure?"
                  :body (str "perform action " n " on " f)
                  :buttons [{:label "ok"}]})))



(def file-ops {:not-staged ["stage" "diff" "revert" "stash"]
               :untracked ["add" "ignore" "delete"]
               :staged ["unstage"]})



(defui file [g-name [f t]]
  [:li {:class (name t)} (str t ":" f)
   [:br]
   (for [bt (g-name file-ops)]
     (button bt f))
   [:br]
   [:br]])



(defui status-ui [this branch git-root]
  [:div
   ;[:h1 (str "test: " (.random js/Math))]
   [:h1 (str "Branch: ") [:button branch]]
   [:h2 "Root: " [:button git-root]]
   [:br]
   (for [t ["commit" "push" "pull" "fetch" "log" "merge" "tag"]] ;  "remote"
     [:button t])

   [:br]
   [:br]
   [:br]
   [:ul (for [[g fs] this]
          (group g fs))]])



(defui wrapper [this]
  [:div.gitlight-status {:style "overflow: scroll;"} "Waiting for git..."])




(behavior ::update
          :desc "update status view"
          :triggers #{:refresh}
          :reaction (fn [ obj status branch git-root]
                      (let [bar-dom (:content @obj)]
                        (dom-trunkate bar-dom) ; clear content
                        (dom/append bar-dom (status-ui status branch git-root))
                        (resize-to-content (dom/parent bar-dom) bar-dom))))



(object/object* ::status
                :tags #{::status}
                :label "GIT"
                :behaviors [::update]
                :order 2
                :init (fn [this]
                        (wrapper @this)))



(def status-bar (object/create ::status))


(def sb (sidebar/add-item sidebar/rightbar status-bar))


