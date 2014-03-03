(ns lt.plugins.gitlight.tests.status.ui
  (:require [lt.object :as object]
            [lt.plugins.gitlight.status.ui :as ui]
            [lt.plugins.gitlight.tests.lib :as t])
  (:require-macros [lt.macros :refer [defui behavior]]))



(defui test-node []
  [:div "test"])

(t/def-test
 ::test
 (fn []
   (t/asrt "dom-truncate: truncates"
           (let [tn (test-node)]
             (ui/dom-truncate tn)
             (= (.-innerHTML tn) "") ))))
