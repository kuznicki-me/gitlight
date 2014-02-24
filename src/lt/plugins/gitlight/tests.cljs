(ns lt.plugins.gitlight.tests
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))



(defui hello-panel [this]
  [:h1 "Hello from test-plugin"])



(object/object* ::tests.out
                :tags [:gitlight-tests.out]
                :name "tests out"
                :init (fn [this]
                        (hello-panel this)))



(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))



(def hello (object/create ::test-plugin.hello))


(cmd/command {:command ::say-hello
              :desc "gitlight: self test"
              :exec (fn []
                      (tabs/add-or-focus! hello))})
