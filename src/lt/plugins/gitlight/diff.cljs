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
    {:class "context" :content (breaker lines lines)}
    (let [partitioned (walk/keywordize-keys (group-by first lines))
          left (:- partitioned)
          right (:+ partitioned)]
      {:class "changed" :content (breaker left right)})))


(defui diff-panel [this]
  (let [output (:results @this)]
    [:div.gitlight-diff {:style "overflow: scroll;"}
     [:h1 (:command output)]
     [:h1 (:header output)]
     [:table
      [:tr
       [:td.left [:b (:left output)]]
       [:td.left [:b (:right output)]]]

      (for [line-group (:content output)]
        (let [columned (columner line-group)
              c (:class columned)
              columns (:content columned)]
          (for [[left right] columns]
            [:tr {:class c}
             [:td.left [:pre left]]
             [:td.right [:pre right]]])))]]))


(def context 2)

(defn git-diff []
  (git/git-command git-diff-output
                   "diff"
                   (str "-U" context)
                   "--"
                   (-> @(pool/last-active) :info :path)))


(defn parse-git-diff [raw-data]
  (let [data (string/split-lines (.toString raw-data))
        [command
         header
         left
         right] (take 4 data)
        content (partition-by #(= \space (first %)) (drop 5 data))]
    {:command command
     :header header
     :left left
     :right right
     :content content}

        ))

(def git-diff-output (cui/make-output-tab-object "Git diff"
                                                 ::gitlight-diff
                                                 parse-git-diff
                                                 diff-panel))


(cmd/command {:command ::git-diff
              :desc "gitlight: diff"
              :exec (fn []
                      (git-diff))})
