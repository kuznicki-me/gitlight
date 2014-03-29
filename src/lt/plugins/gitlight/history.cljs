(ns lt.plugins.gitlight.history
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.plugins.gitlight.lib :as lib]
            [lt.plugins.gitlight :refer [config]])
    (:require-macros [lt.macros :refer [behavior]]))

(def history (atom []))


(behavior ::history-out-success
          :desc "gitlight: Log command output."
          :type :user
          :triggers #{:out}
          :reaction (fn [obj command data err]
                      (swap! history conj {:success [(lib/now) command (.toString data)]})))


(behavior ::history-out-error
          :desc "gitlight: Log command error output."
          :type :user
          :triggers #{:err}
          :reaction (fn [obj command err stderr]
                      (swap! history conj {:error [(lib/now) command (.toString stderr)]})))



(cmd/command {:command ::git-history
             :desc "gitlight: command history"
             :exec (fn [] (println @history))})
