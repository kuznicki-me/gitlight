(ns lt.plugins.gitlight.status
  (:require [lt.object :as object]
            [lt.plugins.gitlight.status.back :as back]
            [lt.plugins.gitlight.status.ui :as ui]
            [lt.plugins.gitlight :refer [config]]
            [lt.objs.sidebar :as sidebar]
            [lt.objs.command :as command]
            [lt.util.js :refer [wait]]
            [lt.util.dom :as dom]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [behavior]]))




(defn run-git-status []
  (if (back/git-status)
    (if (not (ui/is-open?)) (object/raise sidebar/rightbar :toggle ui/status-bar))
    (if (ui/is-open?) (object/raise sidebar/rightbar :close! ui/status-bar))))




(behavior ::init ; added to app in gitlight.behaviors
          :triggers #{:object.instant}
          :desc "Init gitlight status"
          :reaction (fn [this]
                      (sidebar/add-item sidebar/rightbar ui/status-bar)
                      (object/add-behavior! back/git-status-out ::refresh-ui-on-new-status)
                      (object/add-behavior! back/git-status-out ::auto-refresh-git-status)))




(cmd/command {:command :gitlight-status
              :desc "gitlight: Status"
              :exec run-git-status})




(behavior ::refresh-ui-on-new-status
          :desc "refresh ui on new status"
          :triggers #{:status}
          :reaction (fn [ obj data ]
                      (if (ui/is-open?)
                        (object/raise ui/status-bar :refresh
                                      (:status data)
                                      (:branch-name data)))))




(behavior ::auto-refresh-git-status
          :desc "auto refresh git status"
          :triggers #{:status}
          :reaction (fn [ obj data ]
                      (if (and (ui/is-open?) (pos? (:git-status-refresh-rate @config)))
                        (wait (:git-status-refresh-rate @config) (fn []
                                                                   (if (and (ui/is-open?) (not (back/git-status)))
                                                                     (object/raise sidebar/rightbar :close! ui/status-bar)
                                                                     ))))))




(behavior ::debug-new-status
          :desc "debug status"
          :triggers #{:status}
          :reaction (fn [ obj data ]
                      (.log js/console "refresh" (clj->js data))))





; (object/add-behavior! back/shell-git-out ::debug-new-status)
