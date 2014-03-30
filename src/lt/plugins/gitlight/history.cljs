(ns lt.plugins.gitlight.history
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.tabs :as tabs]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [clojure.string :as string]
            [lt.plugins.gitlight.libs :as lib]
            [lt.plugins.gitlight.common-ui :as cui]
            [lt.plugins.gitlight :refer [config]])
    (:require-macros [lt.macros :refer [defui behavior]]))


(defn row [[cls [command date stdout stderr]]]
  (if-not (nil? cls)
    [:tr {:class (name cls)}
     [:th command]
     [:td date [:br] (name cls)]
     [:td [:textarea {:disabled "disabled"} stdout]]
     [:td [:textarea {:disabled "disabled"} stderr]]]))



(defn spacer [txt]
  [:tr.spacer [:td [:h1 txt]]])


(defn parse-dump [dump]
  (string/join "\n" (map str dump)))


(defn landfill-of-history [action dump]
  (let [landfill (pool/create {:line-separator "\n"
                               :name "Landfill_of_History"
                               :tags [:editor.plaintext
                                      :editor.transient]})]
    (tabs/add-or-focus! landfill)
    (editor/set-val landfill dump)))


(defui ui-fun [this]
  (let [history (:history @this)
        last-ok (first (drop-while #(= :error (first %)) @history))
        last-fail (first (drop-while #(= :success (first %)) @history))]
    [:div.gitlight-command-history
     (cui/make-button "dump history" (parse-dump @history) landfill-of-history)
     [:table
     (spacer "last ok: ")
     (row last-ok)
     (spacer "last failed: ")
     (row last-fail)
     (spacer "history: ")
      [:tr [:th] [:th] [:th "stdout"] [:th "stderr"]]
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


(defn command-history []
  (tabs/add-or-focus! history-tab)
  (object/raise history-tab :refresh))


(defn add-to-history [kw obj command stdout stderr]
  (swap! history
         limited-conj
         [kw [command (lib/now) (.toString stdout) (.toString stderr)]]))


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
             :exec command-history})
