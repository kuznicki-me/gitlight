(ns lt.plugins.gitlight.tests.status.ui
  (:require [lt.object :as object]
            [lt.plugins.gitlight.status.ui :as ui]
            [lt.plugins.gitlight.tests.lib :as t])
  (:require-macros [lt.macros :refer [defui behavior]]))




(t/def-test ::test
            (fn []
              (t/asrt "test ui"  (false? (ui/is-open?)))))
