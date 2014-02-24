(ns lt.plugins.gitlight.tests.status.ui
  (:require [lt.object :as object]
            [lt.plugins.gitlight.tests.lib :as t])
  (:require-macros [lt.macros :refer [defui behavior]]))


  (t/asrt "It's alive" true)
  (t/asrt "It's that is not" "that is not")
  (t/asrt "It's an error" false)
