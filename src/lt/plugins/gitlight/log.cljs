(ns lt.plugins.gitlight.log
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            ; [lt.plugins.gitlight :refer [config]]
            [lt.plugins.gitlight.git :as git]
            ; [lt.plugins.gitlight.libs :as lib]
            ; [lt.plugins.gitlight.diff :as diff]
            [lt.plugins.gitlight.common-ui :as cui])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defui log-panel [this]
  (let [logs (:result @this)]
    [:div.gitlight-log
     logs]))


(def git-log-output (cui/make-output-tab-object "Git log"
                                                ::gitlight-branches
                                                log-panel))

(defn git-log []
  (git/git ["log"] git-log-output))


; (defn update-with-timeout []
;   (js/setTimeout git-log (:git-timeout @config)))

; (def update-after (partial lib/wrap-post update-with-timeout))





(cmd/command {:command ::branches
              :desc "gitlight: log"
              :exec git-log})
