(ns lt.plugins.gitlight.tests.lib
  (:require [lt.object :as object]
            [lt.plugins.gitlight.tests :as ta]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))



(defn asrt-out [status]
  (cond
   (or (false? status) (nil? status)) :error
   (true? status) :ok
   :else :not-bool))


(defn asrt
  "Show status of test"
  [explanation test-case]
  (object/raise ta/tests-out :add-result
                {:info explanation :status (asrt-out test-case)}))


(defn def-test [test-name f]
  (behavior test-name
            :triggers #{:run-tests}
            :reaction (fn []
                        (.log js/console "refresh" (.random js/Math))
                        (f)))
  (object/add-behavior! ta/tests-out test-name))
