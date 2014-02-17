(ns lt.plugins.gitlight.status.ui
  (:require [lt.object :as object]
            [lt.objs.sidebar :as sidebar]
            [lt.objs.console :as console]
            [lt.util.dom :as dom]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))



(defui group [g-name files]
  [:li (name g-name)
   [:ul.files (map file files)]])


(defui file [f]
  [:li f])


(defui status-ui [this]
  [:div
   [:h1 (str "test: " (.random js/Math))]
   [:ul (for [[g fs] (:git-statuses this)]
          (group g fs))]])


(defui wrapper [this]
  [:div.git-status ])


(behavior ::update
          :desc "update status view"
          :triggers #{:refresh}
          :reaction (fn [ obj ]
                      (.log js/console "?")
                      (.log js/console (clj->js (:content @obj)))
                      (set! (.-innerHTML (:content @obj)) "")
                      (dom/append (:content @obj) (status-ui @obj))))
;                      (dom/replace-with
;                       (.-firstChild (:content @obj)) (status-ui @obj))))


(object/object* ::status
                :tags #{::status}
                :label "GIT"
                :git-statuses {:untracked ["zygmunt.txt"] :not-staged [] :staged []}
                :behaviors [::update]
                :order 2
                :init (fn [this]
                        (wrapper @this)))


(def status-bar (object/create ::status))

;; (.log js/console (doseq [d (dom/$$ ".git-status")]
;;                   (dom/remove d)))

(def sb (sidebar/add-item sidebar/rightbar status-bar))


; (object/raise status-bar ::refresh)


(cmd/command {:command :status
              :desc "gitlight: Status"
              :exec (fn []
                      (.log js/console (.random js/Math))
                      (object/raise status-bar :refresh)
                      (object/raise sidebar/rightbar :toggle status-bar)
                      (.log js/console "que"))})


