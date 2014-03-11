(ns lt.plugins.gitlight.diff
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.proc :as proc]
            [lt.objs.tabs :as tabs]
            [lt.util.dom :as dom]
            [lt.objs.editor.pool :as pool]
            [clojure.string :as string]
            [clojure.walk :as walk]
            [lt.plugins.gitlight.git :as git]
            [lt.plugins.gitlight.common-ui :as cui])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn val-or-emptystr [what]
  (if (nil? what)
    ">>>>>>>intentionally left empty<<<<<<<<<"
    what))


(defn breaker [left right]
  (let [m [(first left) (first right)]]
    (if (some identity m)
      (cons (map val-or-emptystr m)
            (breaker (rest left) (rest right))))))


(defn columner [lines]
  (if (= \space (first (first lines)))
    (breaker lines lines)
    (let [partitioned (walk/keywordize-keys (group-by first lines))
          left (:- partitioned)
          right (:+ partitioned)]
      (breaker left right))))


(defui diff-panel [this]
  (let [output (:results @this)]
  [:div.diff-panel {:style "overflow: scroll;"}
  [:h1 (:title output)]
   [:table
    [:tr [:td "first"] [:td "second"]]
    (for [line-groups (:content output)]
      (for [[left right] (columner line-groups)]
        [:tr [:td [:pre left]] [:td [:pre right]]]))]]))


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
        content (partition-by #(= \space (first %)) (drop 5 data))]
    {:title title
     :content content}

        ))

(def git-diff-output (cui/make-output-tab-object "Git diff" ::gitlight-diff parse-git-diff diff-panel))


(cmd/command {:command ::git-diff
              :desc "gitlight: diff"
              :exec (fn []
                      (git-diff))})
