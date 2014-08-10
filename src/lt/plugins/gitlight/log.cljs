(ns lt.plugins.gitlight.log
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [clojure.string :as string]
            ; [lt.plugins.gitlight :refer [config]]
            [lt.plugins.gitlight.git :as git]
            ; [lt.plugins.gitlight.libs :as lib]
            [lt.plugins.gitlight.diff :as diff]
            [lt.plugins.gitlight.common-ui :as cui])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defn breakup-into-commits [lines]
  (let [commit-regexp #"commit .*"
        splitter (partial re-matches commit-regexp)
        splitted-by-regexp (partition-by splitter lines)]
    (partition 2 splitted-by-regexp)))

(defn parse-git-log [raw-logs]
  (breakup-into-commits (cui/raw->lines raw-logs)))

(defn make-commit-line [commit-line]
  (let [[text shasum] (string/split (first commit-line) #"\s+" 2)]
   [:p text
    (cui/button shasum
                diff/git-diff
                [nil nil shasum]
                "shasum")]))

(defn one-commit-ui [[commit content]]
  [:div.commit
   (make-commit-line commit)
   [:pre (string/join "\n" content)]])

(defui log-panel [this]
  (let [logs (:result @this)]
    [:div.gitlight-log
     (map one-commit-ui (parse-git-log logs))]))


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
