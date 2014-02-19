(ns lt.plugins.gitlight.status
  (:require [lt.object :as object]
            [lt.plugins.gitlight.status.back :as back]
            [lt.plugins.gitlight.status.ui :as ui]
            [lt.objs.sidebar :as sidebar]
            [lt.util.js :refer [wait]]
            [lt.util.dom :as dom]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))




(cmd/command {:command :gitlight-status
              :desc "gitlight: Status"
              :exec (fn []
                      (back/git-status)
                      (object/raise sidebar/rightbar :toggle ui/status-bar))})




(behavior ::refresh-ui-on-new-status
          :desc "refresh ui on new status"
          :triggers #{:status}
          :reaction (fn [ obj data ]
                      ; (.log js/console "refresh" (clj->js data))
                      (object/raise ui/status-bar :refresh (:status data) (:branch-name data) (:git-root data))))

(object/add-behavior! back/shell-git-out ::refresh-ui-on-new-status)





(behavior ::auto-refresh-git-status
          :desc "auto refresh git status"
          :triggers #{:status}
          :reaction (fn [ obj data ]
                      (wait 1000 back/git-status)))

(object/add-behavior! back/shell-git-out ::auto-refresh-git-status)





(behavior ::debug-new-status
          :desc "debug status"
          :triggers #{:status}
          :reaction (fn [ obj data ]
                      (.log js/console "refresh" (clj->js data))))

; (object/add-behavior! back/shell-git-out ::debug-new-status)
