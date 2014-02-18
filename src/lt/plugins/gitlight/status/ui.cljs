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

(defn dom-scroll-width [n]
  (.-scrollWidth n))

(defn resize-to-content [parent child]
  (resize-rightbar (+
                    (- (dom/width parent) (dom/width child))
                    (dom-scroll-width child))))

(defn dom-trunkate [node]
  (set! (.-innerHTML node) ""))

(defui group [g-name files]
  [:li [:h1 (name g-name)]
   [:ul.files (map file files)]])

(defui button [n f]
  [:button n]
  :click (fn [] (popup/popup! {:header "Are you sure?"
                               :body (str "perform action " n " on " f)
                               :buttons [{:label "ok"}]})))

(defui file [[f t]]
  [:li (str t ":" f)
   [:br]
   (for [bt ["stage" "diff" "revert" "delete" "stash" "add" "ignore"]]
     (button bt f))
   [:br]
   [:br]])


(defui status-ui [this branch]
  [:div
   ;[:h1 (str "test: " (.random js/Math))]
   [:h1 (str "Current branch: " branch)]
   (for [t ["commit" "push" "pull" "fetch" "log" "merge" "branch" "tag" "remote"]]
     [:button t])

   [:br]
   [:br]
   [:br]
   [:ul (for [[g fs] this]
          (group g fs))]])


(defui wrapper [this]
  [:div.git-status {:style "overflow: scroll;"}])




(behavior ::update
          :desc "update status view"
          :triggers #{:refresh}
          :reaction (fn [ obj status branch]
                      (let [bar-dom (:content @obj)]
                        (dom-trunkate bar-dom) ; clear content
                        (dom/append bar-dom (status-ui status branch))
                        (resize-to-content (dom/parent bar-dom) bar-dom))))


(object/object* ::status
                :tags #{::status}
                :label "GIT"
                :behaviors [::update]
                :order 2
                :init (fn [this]
                        (wrapper @this)))


(def status-bar (object/create ::status))


;; (.log js/console (doseq [d (dom/$$ ".git-status")]
;;                   (dom/remove d)))

(def sb (sidebar/add-item sidebar/rightbar status-bar))


