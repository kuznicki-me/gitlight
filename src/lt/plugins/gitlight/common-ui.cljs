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
                        ;(object/merge! obj {:results (data-parsing-fun data)})
                        (reset! (:results @obj) (data-parsing-fun data))
                        (println (str @(:results @obj)))


                        (object/raise obj :refresh))))


(defn make-keywords [k]
   (let [kwrdstr (subs (str k) 1)]
     (map (fn [x] (keyword (str kwrdstr x)))
          ["-out" "-refresh-results" "-refresh-tab-results""-output"])))


(defn make-output-tab-object [window-name k data-parsing-fun ui-fun]
  (let [[tab-kwd
         refresh-kwd
         refresh-tab-kwd
         command-output-kwd] (make-keywords k)

        refresh-results (make-refresh-behavior refresh-kwd ui-fun)

        tab-obj (object/object* tab-kwd
                                :tags [:gitlight-tab.out]
                                :name window-name
                                :results (atom [])
                                :behaviors [::on-close-destroy
                                            refresh-results]
                                :init (fn [this]
                                        (ui-fun this)))
        tab (object/create tab-obj)

        parse-command-output (make-refresh-tab-behavior tab
                                                        refresh-tab-kwd
                                                        data-parsing-fun)]

    (object/create (object/object* command-output-kwd
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
