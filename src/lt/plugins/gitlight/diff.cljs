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
    {:class "context" :cols (breaker lines lines)}
    (let [partitioned (walk/keywordize-keys (group-by first lines))
          left (:- partitioned)
          right (:+ partitioned)]
      {:class "changed" :cols (breaker left right)})))


(defui diff-panel [this]
  (let [output (:results @this)]
    [:div.gitlight-diff {:style "overflow: scroll;"}
     [:div.context
      (cui/make-button "-" "-" (fn [x y] (swap! context dec) (git-diff)))
      (str "context: " @context)
      (cui/make-button "+" "+" (fn [x y] (swap! context inc) (git-diff)))]
     [:div.more-context
      (cui/make-button "whole file" "whole file" (fn [x y] (reset! context 100000) (git-diff)))
      (cui/make-button "reset" "reset" (fn [x y] (reset! context 3) (git-diff)))]

     [:h1 (:command output)]
     [:h1 (:header output)]
     [:table
      [:tr
       [:td.left [:b (:left output)]]
       [:td.left [:b (:right output)]]]

      (for [changes-group (:groups output)]
        (cons [:tr.where [:td [:b (:location changes-group)]]]
              (for [line-group (:content changes-group)]
                (let [columned (columner line-group)
                      c (:class columned)
                      columns (:cols columned)]
                  (for [[left right] columns]
                    [:tr {:class c}
                     [:td.left [:pre left]]
                     [:td.right [:pre right]]])))))
      ]
     ]))


(def context (atom 3))

(defn git-diff []
  (git/git-command git-diff-output
                   "diff"
                   (str "-U" @context)
                   "--"
                   (-> @(pool/last-active) :info :path)))

(defn split-into-groups [lines]
  (when (not (empty? lines))
    (let [where (first lines)
          [content leftovers] (split-with #(not= "@" (first %)) (rest lines))]
      (println "cont:" content)
      (println "party:" (partition-by #(= \space (first %)) content))

      (println "lefto:" leftovers)

      (cons {:location where
             :content (partition-by #(= \space (first %)) content)}
            (split-into-groups leftovers))
      )))


(defn parse-git-diff [raw-data]
  (let [data (string/split-lines (.toString raw-data))
        [command
         header
         left
         right] (take 4 data)
        groups (split-into-groups (drop 4 data))]
    (print groups)
    {:command command
     :header header
     :left left
     :right right
     :groups groups}

        ))

(def git-diff-output (cui/make-output-tab-object "Git diff"
                                                 ::gitlight-diff
                                                 parse-git-diff
                                                 diff-panel))


(cmd/command {:command ::git-diff
              :desc "gitlight: diff"
              :exec (fn []
                      (git-diff))})
