(ns lt.plugins.gitlight.history
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.tabs :as tabs]
            [lt.plugins.gitlight.libs :as lib]
            [lt.plugins.gitlight.common-ui :as cui]
            [lt.plugins.gitlight :refer [config]])
    (:require-macros [lt.macros :refer [defui behavior]]))

(defui row [[cls [date command out]]]
  [:tr {:class cls}
   [:td date]
   [:td command]
   (println out)
   [:td [:textarea out]]

   ]
  )

(defui ui-fun [this]
  (let [history (:history @this)
        reversed (reverse @history)
        last-ok (first (drop-while #(= :error (first %)) reversed))
        last-fail (first (drop-while #(= :success (first %)) reversed))]
    [:div.history
     [:b "last ok: "]
     [:table.last-ok
     (row last-ok)]
     [:b "last failed: "]
     [:table.last-fail
     (row last-fail)]
     [:b "history: "]
     [:table.history
     (map row reversed)]
     ]
    )

  )

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


(behavior ::history-out-success
          :desc "gitlight: Log command output."
          :type :user
          :triggers #{:out}
          :reaction (fn [obj command data err]
                      (swap! history conj [:success [(lib/now) command (.toString data)]])))


(behavior ::history-out-error
          :desc "gitlight: Log command error output."
          :type :user
          :triggers #{:err}
          :reaction (fn [obj command err stderr]
                      (swap! history conj [:error [(lib/now) command (.toString stderr)]])))



(cmd/command {:command ::git-history
             :desc "gitlight: command history"
             :exec (fn [] (println @history)
                     (tabs/add-or-focus! history-tab)
                     (object/raise history-tab :refresh)
                     )})
