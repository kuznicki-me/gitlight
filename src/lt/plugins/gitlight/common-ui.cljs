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


(defn make-refresh-behavior [k ui-fun]
  (behavior k
            :triggers #{:refresh}
            :reaction (fn [this]
                        (let [new-cnt (ui-fun this)]
                        (dom-reset (dom/parent (:content @this)) new-cnt)
                        (object/merge! this {:content new-cnt} )))))


(defn make-refresh-tab-behavior [obj k data-parsing-fun]
  (behavior k
            :triggers #{:proc.out}
            :reaction (fn [this data]
                        (tabs/add-or-focus! obj)
                        (object/merge! obj {:results (data-parsing-fun data)})
                        (object/raise obj :refresh))))


(defn make-output-tab-object [k data-parsing-fun ui-fun]
  (let [kwrdstr (subs (str k) 1)
        data-keeping-obj (str kwrdstr "-out")
        refresh-str (str kwrdstr "-refresh-results")
        refresh-tab-str (str kwrdstr "-refresh-tab-results")
        command-output-str (str kwrdstr "-output")

        refresh-results (make-refresh-behavior (keyword refresh-str) ui-fun)

        out-obj (object/object* (keyword data-keeping-obj)
                                :tags [:gitlight-tab.out]
                                :name data-keeping-obj
                                :results []
                                :behaviors [::on-close-destroy
                                            refresh-results]
                                :init (fn [this]
                                        (ui-fun this)))
        out (object/create out-obj)

        parse-command-output (make-refresh-tab-behavior out
                                                        (keyword refresh-tab-kwrd)
                                                        data-parsing-fun)]

    (object/create (object/object* (keyword command-output-str)
                                   :tags #{:gitlight-tab-output}
                                   :behaviors [parse-command-output]))))



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