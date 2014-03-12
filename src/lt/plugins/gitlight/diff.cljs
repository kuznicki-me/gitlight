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



(defui diff-panel [this]
  (let [output (:results @this)]
    [:div.gitlight-diff {:style "overflow: scroll;"}
     [:div.context
      (cui/make-button "-" "-" (partial click-run-function-update
                                        #(swap! context dec)
                                        git-diff-update-fun))
      (str "context: " @context)
      (cui/make-button "+" "+" (partial click-run-function-update
                                        #(swap! context inc)
                                        git-diff-update-fun))]
     [:div.more-context
            (cui/make-button "whole file" "whole file" (partial click-run-function-update
                                        #(reset! context 100000)
                                        git-diff-update-fun))
            (cui/make-button "reset" "reset" (partial click-run-function-update
                                        #(reset! context 3)
                                        git-diff-update-fun))]

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

(defn git-diff-update-fun []
  (git-diff @last-filename))


(defn click-run-function-update [fun up x y]
  (fun)
  (up))


(def context (atom 3))

; necessary for update
(def last-filename (atom nil))



(defn val-or-emptystr [what]
  (if (nil? what)
    ""
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


(defn split-into-groups [lines]
  (when (not (empty? lines))
    (let [where (first lines)
          [content leftovers] (split-with #(not= "@" (first %)) (rest lines))]
;      (println "cont:" content)
;      (println "party:" (partition-by #(= \space (first %)) content))
;      (println "lefto:" leftovers)

      (cons {:location where
             :content (partition-by #(= \space (first %)) content)}
            (split-into-groups leftovers))
      )))


(defn split-into-headered-groups [lines fun result-fun headkey contkey]
  (when (not (empty? lines))
    (let [fst (first lines)
          [content leftovers] (split-with fun (rest lines))]
    (cons {headkey fst
           contkey (result-fun content)}
          (split-into-headered-groups leftovers fun result-fun headkey contkey)))
    ))
; )

(defn split-into-groups2 [lines]
  (split-into-headered-groups lines
                              (fn [x] (not= "@" (first x)))
                              (fn [x] (partition-by #(= \space (first %)) x))
                              :location
                              :content
                              ))


(defn split-into-files [lines]
  (split-into-headered-groups lines
                              (partial re-matches #"^diff --git ")
                              split-into-groups2
                              :filename
                              :line-groups
                              )

  )

(defn parse-git-diff [raw-data]
  (let [data (string/split-lines (.toString raw-data))
        [command
         header
         left
         right] (take 4 data)
        groups (split-into-groups2 (drop 4 data))]
    (print groups)
    {:command command
     :header header
     :left left
     :right right
     :groups groups}))



(def git-diff-output
  (cui/make-output-tab-object "Git diff"
                              ::gitlight-diff
                              parse-git-diff
                              diff-panel))


(defn git-diff [filepath]
  (reset! last-filename filepath)
  (git/git-command git-diff-output
                   "diff"
                   (str "-U" @context)
                   "--"
                   filepath))



(defn git-diff-button [action filename]
  (git-diff (str (git/get-git-root) "/" filename)))


(cmd/command {:command ::git-diff
              :desc "gitlight: diff this file"
              :exec (fn []
                      (git-diff (-> @(pool/last-active) :info :path)))})
