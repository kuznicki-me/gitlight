(ns lt.plugins.gitlight.status
  (:require [lt.object :as object]
            [lt.plugins.gitlight.status.back :as back]
            [lt.plugins.gitlight.status.ui :as ui]
            [lt.plugins.gitlight :refer [config error]]
            [lt.objs.sidebar :as sidebar]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as command]
            [lt.util.dom :as dom]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [behavior]]))

(defn status-if-open []
  (if (ui/is-open?)
    (back/git-status)))


(behavior ::init ; added to app in gitlight.behaviors
          :triggers #{:object.instant}
          :desc "gitlight: Init gitlight status"
          :reaction (fn [this]
                      (sidebar/add-item sidebar/rightbar ui/status-bar)
                      (object/add-behavior! back/git-status-out
                                            ::refresh-ui-on-new-status)
                      (object/add-behavior! back/git-status-out
                                            ::close-ui-on-failure)
                      (object/add-behavior! back/git-status-out
                                            ::add-watch)))


(defn status-toggle []
  (if (ui/is-open?)
    (do
      (object/raise ui/status-bar ::close-ui-on-failure)
      (object/raise sidebar/rightbar :close! ui/status-bar))
    (back/git-status)))



(cmd/command {:command :gitlight-status
              :desc "gitlight: status"
              :exec back/git-status})


(cmd/command {:command :gitlight-status-toggle
              :desc "gitlight: status toggle"
              :exec status-toggle})


(behavior ::refresh-ui-on-new-status
          :desc "gitlight: refresh ui on new status"
          :triggers #{:status}
          :reaction (fn [ obj data ]
                      (if-not (ui/is-open?)
                        (object/raise sidebar/rightbar
                                      :toggle
                                      ui/status-bar))
                      (object/raise ui/status-bar
                                    :refresh
                                    (:status data)
                                    (:branch-name data))))



(behavior ::close-ui-on-failure
          :desc "gitlight: close ui on failure"
          :triggers #{:status-failed}
          :reaction (fn [ obj data ]
                      (remove-watch pool/pool ::status-pool-watch)
                      (if (ui/is-open?)
                        (object/raise sidebar/rightbar :close! ui/status-bar))))


(behavior ::add-watch
          :desc "add pool watch"
          :triggers #{:add-watch}
          :reaction (fn [obj]
                      (add-watch pool/pool
                                 ::status-pool-watch
                                 (fn [k r old new] (status-if-open)))))


(behavior ::refresh-git-status-on-save
          :triggers #{:save+}
          :type :user
          :desc "gitlight: refresh gitlight status"
          :exclusive true
          :reaction (fn [editor content]
                      (status-if-open)
                      content))


(behavior ::debug-new-status
          :desc "gitlight: debug status"
          :triggers #{:status}
          :reaction (fn [ obj data ]
                      (.log js/console "refresh" (clj->js data))))





; (object/add-behavior! back/shell-git-out ::debug-new-status)
