(ns lt.plugins.gitlight.common-ui
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.popup :as popup]
            [crate.core :as crate]
            [crate.binding :refer [subatom bound map-bound computed]]
            [lt.util.dom :as dom])
  (:require-macros [lt.macros :refer [defui behavior]]))




(defui input [this]
  [:input.option {:type "text"
                  :placeholder (bound this :placeholder)
                  :value (bound this ->value)}]
  :keyup (fn [e]
           (this-as me
                    (reset! (:message @common-input) (dom/val me)))))



(object/object* ::common-input
                :tags #{:commit-input}
                :placeholder "message"
                :message (atom nil)
                :init (fn [this opts]
                        (object/merge! this opts)
                        (input this)))


(def common-input (object/create ::common-input))



(defn ->value [{:keys [value]}]
  (if-not value
    ""
    value))


(def mesg-atom
  (:message @common-input))

(defn handle-input-and-clear [fun]
  (apply fun [@mesg-atom])
  (clear-input))


(defn clear-input []
  (reset! mesg-atom nil))

(defn input-popup [mesg label fun]
  (popup/popup! {:header  mesg
                 :body (input common-input)
                 :buttons [{:label label
                            :action (fn [] (handle-input-and-clear fun))}
                            {:label "cancel"
                            :action clear-input}]}))


(defn make-refresh-behavior [k fun]
  (behavior k
            :triggers #{:refresh}
            :reaction (fn [this]
                        (let [new-cnt (fun this)]
                        (dom-reset (dom/parent (:content @this)) new-cnt)
                        (object/merge! this {:content new-cnt} )))))


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
