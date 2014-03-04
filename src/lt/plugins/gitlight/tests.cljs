(ns lt.plugins.gitlight.tests
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.util.dom :as dom]
            [lt.objs.command :as cmd]
            [lt.plugins.gitlight.common-ui :as cui])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn which-color? [result]
  (case result
    :ok "green"
    :error "red"
    :not-bool "pink"
    "purple"))


(defui test-panel [this]
  [:div [:h1 "Tests"]
   [:table
    (for [{:keys [info status]} (:results @this)]
      [:tr
       [:td info]
       [:td {:style (str "border: 1px solid " (which-color? status) ";")}
        (name status)]])]])




(behavior ::refresh-results
          :triggers #{:add-result}
          :reaction (fn [this result]
                      (object/update! this [:results] conj result)
                      (let [new-cnt (test-panel this)]
                        (cui/dom-reset (dom/parent (:content @this)) new-cnt)
                        (.log js/console (.-innerHTML new-cnt))
                        (object/merge! this {:content new-cnt} ))))



(object/object* ::tests.out
                :tags [:gitlight-tests.out]
                :name "tests out"
                :results [{:info "show test panel" :status :ok}]
                :behaviors [:lt.plugins.gitlight.common-ui/on-close-destroy
                            ::refresh-results]
                :init (fn [this]
                        (test-panel this)))





(def tests-out (object/create ::tests.out))


;(object/raise tests-out :add-result {:info "lololol panel" :status :not-bool})



(cmd/command {:command ::selft-test
              :desc "gitlight: self test"
              :exec (fn []
                      (tabs/add-or-focus! tests-out)
                      (object/merge! tests-out {:results []})
                      (object/raise tests-out :run-tests))})
