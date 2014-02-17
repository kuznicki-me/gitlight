(ns lt.plugins.gitlight
  (:require [lt.object :as object]
            [lt.objs.sidebar :as sidebar]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))


(cmd/command {:command ::gitlight.sidebar.close
              :desc "gitlight: sidebar close"
              :exec (fn []
                      (object/raise sidebar/rightbar :close!))})
