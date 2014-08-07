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


(defn row [[success-or-error command date stdout stderr]]
  (if-not (nil? success-or-error)
    [:tr {:class (name success-or-error)}
     [:th command]
     [:td date [:br] (name success-or-error)]
     [:td [:textarea {:disabled "disabled"} stdout]]
     [:td [:textarea {:disabled "disabled"} stderr]]]))



(defn spacer [txt]
  [:tr.spacer [:td [:h1 txt]]])


(defn parse-dump [dump]
  (string/join "\n" (map str dump)))


(defn landfill-of-history [dump]
  (let [landfill (pool/create {:line-separator "\n"
                               :name "Landfill_of_History"
                               :tags [:editor.plaintext
                                      :editor.transient]})]
    (tabs/add-or-focus! landfill)
    (editor/set-val landfill dump)))

(defn get-first [needle haystack]
  (first (filter #(= needle (first %)) haystack)))


(def history-header
  [:tr [:th] [:th] [:th "stdout"] [:th "stderr"]])


(defui make-history-gui [this]
  (let [history (:history @this)
        dump-button (cui/button "dump history"
                                landfill-of-history
                                [(parse-dump @history)])
        last-ok (get-first :success @history)
        last-fail (get-first :error @history)
        history-rows (map row @history)]
    [:div.gitlight-command-history
     dump-button
     [:table
      (spacer "last ok: ")
      (row last-ok)
      (spacer "last failed: ")
      (row last-fail)
      (spacer "history: ")
      history-header
      history-rows]]))


(def refresh (cui/make-refresh-behavior ::history-refresh make-history-gui))


(def tab-obj (object/object* ::history-tab
                             :tags [:history-tab]
                             :name "Git command history"
                             :history (atom [])
                             :behaviors [:lt.plugins.gitlight.common-ui/on-close-destroy
                                         refresh]
                             :init make-history-gui))


(def history-tab (object/create tab-obj))


(defn history-limited-conj [a b]
  (let [just-enough (:max-history @config)]
    (take just-enough (conj a b))))


(defn command-history []
  (tabs/add-or-focus! history-tab)
  (object/raise history-tab :refresh))


(defn add-to-history [success-or-error obj command stdout stderr]
  (if-not (nil? command)
    (let [history (:history @history-tab)
          item-to-add [success-or-error
                       command
                       (lib/now)
                       (str stdout)
                       (str stderr)]]
      (swap! history history-limited-conj item-to-add))))


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
