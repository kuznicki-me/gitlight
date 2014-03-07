(ns lt.plugins.gitlight.commit
  (:require [lt.object :as object]
            [lt.objs.popup :as popup]
            [lt.objs.context :as ctx]
            [lt.objs.command :as cmd]
            [lt.util.dom :as dom]
            [lt.plugins.gitlight.common-ui :as cui]
            [lt.plugins.gitlight.git :as git])
  (:require-macros [lt.macros :refer [defui behavior]]))

(cmd/command {:command ::git-commit
              :desc "gitlight: commit"
              :exec (fn []
                      (git-commit))})


(defn git-commit []
  (cui/input-popup "commit message?" "commit" git-cmd-commit))



(defn git-cmd-commit [msg]
  (git/git-command-ignore-out "commit" "-m" msg))
