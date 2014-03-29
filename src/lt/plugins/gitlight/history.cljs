(ns lt.plugins.gitlight.history
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.tabs :as tabs]
            [lt.plugins.gitlight.libs :as lib]
            [lt.plugins.gitlight.common-ui :as cui]
            [lt.plugins.gitlight :refer [config]])
    (:require-macros [lt.macros :refer [defui behavior]]))


(defn row [[cls [date command out]]]
  (if-not (nil? cls)
    [:tr {:class (name cls)}
     [:td date]
     [:td command]
     [:td [:textarea out]]]))



(defn spacer [txt]
  [:tr.spacer [:td [:b txt]]])



(defui ui-fun [this]
  (let [history (:history @this)
        last-ok (first (drop-while #(= :error (first %)) @history))
        last-fail (first (drop-while #(= :success (first %)) @history))]
    [:div.gitlight-command-history
     [:table
     (spacer "last ok: ")
     (row last-ok)
     (spacer "last failed: ")
     (row last-fail)
     (spacer "history: ")
     (map row @history)]]))


(def refresh (cui/make-refresh-behavior ::history-refresh ui-fun))


(def tab-obj (object/object* ::history-tab
                             :tags [:history-tab]
                             :name "Git command history"
                             :history (atom [])
                             :behaviors [:lt.plugins.gitlight.common-ui/on-close-destroy
                                         refresh]
                             :init (fn [this]
                                     (ui-fun this))))


(def history-tab (object/create tab-obj))


(def history (:history @history-tab))


(def toomuch (:max-history @config))


(defn limited-conj [a b]
  (take toomuch (conj a b)))


(behavior ::history-out-success
          :desc "gitlight: Log command output."
          :type :user
          :triggers #{:out}
          :reaction (fn [obj command data err]
                      (swap! history
                             limited-conj
                             [:success [(lib/now) command (.toString data)]])))


(behavior ::history-out-error
          :desc "gitlight: Log command error output."
          :type :user
          :triggers #{:err}
          :reaction (fn [obj command err stderr]
                      (swap! history
                             limited-conj
                             [:error [(lib/now) command (.toString stderr)]])))



(cmd/command {:command ::git-history
             :desc "gitlight: command history"
             :exec (fn []
                     (tabs/add-or-focus! history-tab)
                     (object/raise history-tab :refresh)
                     )})
