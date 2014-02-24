(ns lt.plugins.gitlight.tests.lib
  (:require [lt.object :as object]
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
  (.log js/console
        explanation
        (name (asrt-out test-case))))
