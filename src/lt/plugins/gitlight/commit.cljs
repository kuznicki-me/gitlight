(ns lt.plugins.gitlight.commit
  (:require [lt.object :as object]
            [lt.objs.popup :as popup]
            [lt.objs.context :as ctx]
            [lt.objs.command :as cmd]
            [lt.util.dom :as dom]
            [lt.plugins.gitlight.common-ui :as cui]
            [lt.plugins.gitlight.git :as git])
  (:require-macros [lt.macros :refer [defui behavior]]))



;(defui input [this]
;  [:input.option {:type "text" :placeholder (bound this :placeholder) :value (bound this ->value)}]
;  :keyup (fn [e]
;           (this-as me
;                    (reset! (:commit @commit-input) (dom/val me)))))
;
;(defn ->value [{:keys [value]}]
;  (if-not value
;    ""
;    value))

(cmd/command {:command ::git-commit
              :desc "gitlight: commit"
              :exec git-commit})


(defn git-commit []
  (cui/input-popup "commit message?" "commit" git-cmd-commit)
  )

(defn git-cmd-commit [msg]
  (git/git-command-ignore-out "commit" "-m" msg))
