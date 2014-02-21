(ns lt.plugins.gitlight.status.ui
  (:require [lt.object :as object]
            [lt.plugins.gitlight.status.back :as back]
            [lt.objs.sidebar :as sidebar]
            [lt.objs.console :as console]
            [lt.objs.popup :as popup]
            [lt.objs.tabs :as tabs]
            [lt.util.dom :as dom]
            [lt.plugins.gitlight.git :as git]
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
                    (- (dom/width parent) (dom/width child)) ; typical size diff between parent and a child
                    (dom-scroll-width child))))


(defn is-open? []
  (= (:active @sidebar/rightbar)
     status-bar))


(defn dom-truncate [node]
  (set! (.-innerHTML node) ""))



(defui group [g-name files]
  [:li {:class (name g-name)} [:h1 (g-name group-names)]
   [:ul.files (map (partial file g-name) files)]])



(defui button [n f]
  [:button [:nobr n]]
  :click (fn [] (popup/popup!
                 {:header "Not yet implemented..."
                  :body (str "perform action " n " on " f)
                  :buttons [{:label "ok"}]})))



(def file-ops {:not-staged ["stage" "diff" "revert" "stash"]
               :untracked ["add" "ignore" "delete"]
               :staged ["unstage"]})



(defui file [g-name [f t]]
  [:li {:class (name t)} [:nobr (str (.toUpperCase (first (name t))) " " f)]
   [:br]
   (for [bt (g-name file-ops)]
     (button bt f))
   [:br]
   [:br]])



(defui status-ui [this branch git-root]
  [:div
   ;[:h1 (str "test: " (.random js/Math))]
   [:h1 [:nobr (str "Branch: ") (button branch (str "Branch menu"))]]
   [:h2 [:nobr "Root: " (button git-root "Change repo")]]
   [:br]
   (for [t ["commit" "push" "pull" "fetch" "log" "merge" "tag"]] ;  "remote"
     (button t git-root))

   [:br]
   [:br]
   [:br]
   [:ul (for [[g fs] this]
          (if-not (zero? (count fs))
            (group g fs)))]])



(defui wrapper [this]
  [:div.gitlight-status {:style "overflow: scroll;"} "Waiting for git..."])




(behavior ::update
          :desc "update status view"
          :triggers #{:refresh}
          :reaction (fn [ obj status branch]
                      (let [bar-dom (:content @obj)]
                        (dom-truncate bar-dom) ; clear content
                        (dom/append bar-dom (status-ui status branch (git/get-git-root)))
                        (resize-to-content (dom/parent bar-dom) bar-dom))))



(object/object* ::status
                :tags #{::status}
                :label "GIT"
                :behaviors [::update]
                :order 2
                :init (fn [this]
                        (wrapper @this)))



(def status-bar (object/create ::status))


