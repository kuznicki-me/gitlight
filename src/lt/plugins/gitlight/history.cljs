(ns lt.plugins.gitlight.history
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.tabs :as tabs]
            [lt.plugins.gitlight.libs :as lib]
            [lt.plugins.gitlight.common-ui :as cui]
            [lt.plugins.gitlight :refer [config]])
    (:require-macros [lt.macros :refer [defui behavior]]))


(defn row [[cls [date command stdout stderr]]]
  (if-not (nil? cls)
    [:tr {:class (name cls)}
     [:td date]
     [:td command]
     [:td [:textarea stdout]]
     [:td [:textarea stderr]]]))



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


(defn add-to-history [kw obj command stdout stderr]
  (swap! history
         limited-conj
         [kw [(lib/now) command (.toString stdout) (.toString stderr)]]))


(behavior ::history-out-success
          :desc "gitlight: Log command output."
          :type :user
          :triggers #{:out}
          :reaction (partial add-to-history :success))


(behavior ::history-out-error
          :desc "gitlight: Log command error output."
          :type :user
          :triggers #{:err}
          :reaction (partial add-to-history :error))


(cmd/command {:command ::git-history
             :desc "gitlight: command history"
             :exec (fn []
                     (tabs/add-or-focus! history-tab)
                     (object/raise history-tab :refresh)
                     )})
