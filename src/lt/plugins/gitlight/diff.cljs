(ns lt.plugins.gitlight.diff
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.proc :as proc]
            [lt.objs.tabs :as tabs]
            [lt.util.dom :as dom]
            [lt.objs.editor.pool :as pool]
            [clojure.string :as string]
            [lt.plugins.gitlight.git :as git]
            [lt.plugins.gitlight.common-ui :as cui])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defui diff-panel [this]
  (let [output (:results @this)]
  [:div
  [:h1 (:title output)]
   [:p (:content output)]
   ]
  ))


(def context 1000000)


(defn git-diff []
  (git/git-command git-diff-output
                   "diff"
                   (str "-U" context)
                   "--"
                   (-> @(pool/last-active) :info :path)))


(defn parse-git-diff [raw-data]
  (let [data (string/split-lines (.toString raw-data))
        title (take 2 data)
        ;left (nth data 3)
        ;right (nth data 4)
        content (drop 5 data)]
    {:title title
     :content content}

        ))

(def git-diff-output (cui/make-output-tab-object "Git diff" ::gitlight-diff parse-git-diff diff-panel))


(cmd/command {:command ::git-diff
              :desc "gitlight: diff"
              :exec (fn []
                      (git-diff))})
