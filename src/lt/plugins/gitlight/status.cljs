(ns lt.plugins.gitlight.status
  (:require [lt.object :as object]
            [lt.plugins.gitlight.status.back :as back]
            [lt.plugins.gitlight.status.ui :as ui]
            [lt.objs.sidebar :as sidebar]
            [lt.objs.console :as console]
            [lt.util.dom :as dom]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))




(cmd/command {:command :gitlight-status
              :desc "gitlight: Status"
              :exec (fn []
                      (.log js/console (.random js/Math))
                      (back/git-status)
                      (object/raise sidebar/rightbar :toggle ui/status-bar)
                      (.log js/console "que"))})


(behavior ::refresh-ui-on-new-status
          :desc "refresh ui on new status"
          :triggers #{:status}
          :reaction (fn [ obj data ]
                      (.log js/console "refresh" (clj->js data))
                      (object/raise ui/status-bar :refresh (:status data) (:branch-name data))))


(object/add-behavior! back/shell-git-out ::refresh-ui-on-new-status)


; (object/raise status-bar ::refresh)
