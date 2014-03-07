(ns lt.plugins.gitlight.commit
  (:require [lt.object :as object]
            [lt.objs.popup :as popup]
            [lt.objs.context :as ctx]
            [lt.objs.command :as cmd]
            [lt.util.dom :as dom]
            [crate.core :as crate]
            [crate.binding :refer [subatom bound map-bound computed]]
            [lt.plugins.gitlight.git :as git])
  (:require-macros [lt.macros :refer [defui behavior]]))



(defui input [this]
  [:input.option {:type "text" :placeholder (bound this :placeholder) :value (bound this ->value)}]
  :keyup (fn [e]
           (this-as me
                    (reset! (:commit @commit-input) (dom/val me)))))
(defn ->value [{:keys [value]}]
  (if-not value
    ""
    value))

(object/object* ::commit-input
                :tags #{:commit-input}
                :placeholder "commit message"
                :commit (atom nil)
                :init (fn [this opts]
                        (object/merge! this opts)
                        (input this)))


(def commit-input (object/create ::commit-input))


(cmd/command {:command ::git-commit
              :desc "gitlight: commit"
              :exec git-commit})


(defn git-commit []
  (popup/popup! {:header  "commit message?"
                 :body (input commit-input)
                 :buttons [{:label "commit"
                            :action (fn []
                                      (git-cmd-commit @(:commit @commit-input))
                                      (reset! (:commit @commit-input) nil))}
                           {:label "cancel"
                            :action (fn [] reset! (:commit @commit-input) nil)}]}))

(defn git-cmd-commit [msg]
  (git/git-command-ignore-out "commit" "-m" msg))
