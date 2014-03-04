(ns lt.plugins.gitlight.common-ui
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.popup :as popup]
            [lt.util.dom :as dom])
  (:require-macros [lt.macros :refer [defui behavior]]))



(defn dom-truncate [node]
  (set! (.-innerHTML node) ""))



(defn dom-reset [node new-cnt]
  (dom-truncate node)
  (dom/append node new-cnt))



(defui button [n f fun]
  [:button [:nobr n]]
  :click (fn [] (fun n f)))



(defn make-button [n f fun]
  (button n f (if (= fun nil)
                not-implemented-popup
                fun)))



(defn not-implemented-popup [ n f ]
  (popup/popup!
   {:header "Not yet implemented..."
    :body (str "perform action " n " on " f)
    :buttons [{:label "ok"}]}))




(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))
