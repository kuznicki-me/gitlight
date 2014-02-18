(ns lt.plugins.gitlight.status.ui
  (:require [lt.object :as object]
            [lt.plugins.gitlight.status.back :as back]
            [lt.objs.sidebar :as sidebar]
            [lt.objs.console :as console]
            [lt.util.dom :as dom]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))



(defui group [g-name files]
  [:li [:h1 (name g-name)]
   [:ul.files (map file files)]])


(defui file [[f t]]
  [:li (str t ":" f)])


(defui status-ui [this]
  [:div
   [:h1 (str "test: " (.random js/Math))]
   [:ul (for [[g fs] this]
          (group g fs))]])


(defui wrapper [this]
  [:div.git-status ])


(behavior ::update
          :desc "update status view"
          :triggers #{:refresh}
          :reaction (fn [ obj status ]
                      (.log js/console "?")
                      (set! (.-innerHTML (:content @obj)) "")
                      (.log js/console (.-innerHTML (status-ui status)))
                      (dom/append (:content @obj) (status-ui status))))



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



