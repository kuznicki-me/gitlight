(ns lt.plugins.gitlight.diff
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.proc :as proc]
            [lt.objs.tabs :as tabs]
            [lt.util.dom :as dom]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [clojure.string :as string]
            [lt.plugins.gitlight.gutter :as gut]
            [lt.plugins.gitlight.execute :as exec]
            [lt.plugins.gitlight.git :as git]
            [lt.plugins.gitlight.common-ui :as cui])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn click-run-function-update [fun up x y]
  (fun)
  (up))


(def context (atom 3))

; necessary for update
(def last-filename (atom nil))



(defn git-diff-update-fun []
  (git-diff @last-filename))



(defn make-context []
   [:div.context
    (cui/make-button "-" "-" (partial click-run-function-update
                                      #(swap! context dec)
                                      git-diff-update-fun))
    (str "context: " @context)
    (cui/make-button "+" "+" (partial click-run-function-update
                                      #(swap! context inc)
                                      git-diff-update-fun))])


(defn make-more-context []
   [:div.more-context
    (cui/make-button "whole file" "whole file" (partial click-run-function-update
                                                        #(reset! context 100000)
                                                        git-diff-update-fun))
    (cui/make-button "reset" "reset" (partial click-run-function-update
                                              #(reset! context 3)
                                              git-diff-update-fun))] )



(defui diff-panel [this]
  (let [output (:results @this)]
    [:div.gitlight-diff {:style "overflow: scroll;"}
     (make-context)
     (make-more-context)

     (for [file (parse-git-diff @output)
           :let [filename (:filename file)
                 file-diff (:file-diff file)]]
       [:table
        ;[:tr [:td.filename filename]]

        [:tr [:td.header (:header file-diff)]]
        [:tr
         [:td.left [:b (:left file-diff)]]
         [:td.right [:b (:right file-diff)]]]

        (for [changes-group (:groups file-diff)]
          (cons [:tr.where [:td
                            {:colspan 2}
                            [:b (:location changes-group)]]]
                (for [line-group (:content changes-group)
                      :let [columned (columner line-group)
                            c (:class columned)
                            columns (:cols columned)]]
                  (for [[left right] columns]
                    [:tr {:class c}
                     [:td.left [:pre left]]
                     [:td.right [:pre right]]]))))
        ])
     ]))



(defn breaker [left right]
  (let [m [(first left) (first right)]]
    (if (some identity m)
      (cons m (breaker (rest left) (rest right))))))


(defn separate [fun coll]
  (reduce (fn [[left right] line]
            (if (fun line)
              [(conj left line) right]
              [left (conj right line)]))
          [[] []]
          coll))


(defn columner [lines]
  (if (= \space (first (first lines)))
    {:class "context" :cols (breaker lines lines)}
    (let [[left right] (separate #(= \- (first %)) lines)]
      {:class "changed" :cols (breaker left right)})))



(defn split-into-headered-groups [lines fun result-fun headkey contkey]
  (when (not (empty? lines))
    (let [fst (first lines)
          [content leftovers] (split-with fun (rest lines))]
    (cons {headkey fst
           contkey (result-fun content)}
          (split-into-headered-groups leftovers
                                      fun
                                      result-fun
                                      headkey
                                      contkey)))))



(defn split-into-groups [lines]
  (split-into-headered-groups
   lines
   (fn [x] (not= "@" (first x)))
   (fn [x] (partition-by #(= \space (first %)) x))
   :location
   :content))


(defn parse-single-git-diff [data]
  (let [[header
         left
         right] (take 3 data)
        groups (split-into-groups (drop 3 data))]
    {:header header
     :left left
     :right right
     :groups groups}))


(defn split-into-files [lines]
  (split-into-headered-groups
   lines
   (fn [x] (nil? (re-matches #"diff --git .*" x)))
   parse-single-git-diff
   :filename
   :file-diff))


(defn parse-git-diff [raw-data]
  (split-into-files (string/split-lines (.toString raw-data))))



(def git-diff-output
  (cui/make-output-tab-object "Git diff"
                              ::gitlight-diff
                              diff-panel))



(defn git-diff [filepath]
  (reset! last-filename filepath)
  (git/git-command git-diff-output
                   "--no-pager"
                   "diff"
                   "--no-color"
                   (str "-U" @context)
                   "--"
                   filepath))



(defn git-diff-button [action filename]
  (git-diff (str (git/get-git-root) "/" filename)))



(defn git-diff-repo-button [action filename]
  (git-diff ""))



(defn side-by-side [firsts]
  (let [partitioned (partition-by first firsts)]
    (first
     (reduce (fn [[ok stack] part]
               (let [[fst rst] (split-at 1 part)
                     left (count stack)
                     right (count part)]
                 (case (first fst)
                   \space  [(concat ok
                                    (if (empty? stack)
                                      fst
                                      [(str " -" (count stack) "↑")])
                                    rst)
                            []]
                   \- [ok part]
                   \+ [(concat ok
                               (map str part stack)
                               (repeat (- right left) "+"))
                       (repeat (- left right) "-")]
                   \\ [ok part]
                   )))
             [[][]] partitioned))))





(behavior ::parse-diff-gutter-out
          :triggers [:out]
          :reaction (fn [this stdout stderr]
                      (let [parsed (drop 5 (string/split-lines (.toString stdout)))
                            firsts (map first parsed)]
                        (gut/show-gutter-data
                         (pool/last-active)
                         (if (empty? firsts)
                           (repeat
                            (.-size (.-doc (editor/->cm-ed (pool/last-active))))
                            " ")
                           (side-by-side firsts))))))


(behavior ::diff-gutter-err
          :triggers [:err]
          :reaction (fn [this err stderr]
                      (println "error" stderr)))


(behavior ::refresh-diff-gutter-on-save
          :triggers #{:save+}
          :type :user
          :desc "gitlight: refresh diff gutter"
          :reaction (fn [editor content]
                      (if (object/has-tag? editor ::gitlight-gutter-on)
                        (do
                          (object/remove-tags editor #{::gitlight-gutter-on})
                          (add-git-diff-gutter)))
                      content))


(def git-diff-gutter-out
  (object/create
   (object/object* ::diff-file-out
                   :tags #{::diff-file-out}
                   :behaviors [::parse-diff-gutter-out ::diff-gutter-err])))


(defn add-git-diff-gutter []
  (object/add-tags (pool/last-active) #{::gitlight-gutter-on})
  (git/git-command git-diff-gutter-out
                   "diff" "-U10000" "--" (-> @(pool/last-active) :info :path)))


(defn remove-git-diff-gutter []
  (gut/remove-gutters (pool/last-active))
  (object/remove-tags (pool/last-active) #{::gitlight-gutter-on}))


(defn toggle-git-diff-gutter []
  (if (object/has-tag? (pool/last-active) ::gitlight-gutter-on)
    (remove-git-diff-gutter)
    (add-git-diff-gutter)))

(cmd/command {:command ::gitlight-add-diff-gutter
              :desc "gitlight: add gutter diff (experimental)"
              :exec add-git-diff-gutter})


(cmd/command {:command ::gitlight-remove-diff-gutter
              :desc "gitlight: remove gutter diff (experimental)"
              :exec remove-git-diff-gutter})


(cmd/command {:command ::gitlight-toggle-diff-gutter
              :desc "gitlight: toggle gutter diff (experimental)"
              :exec toggle-git-diff-gutter})


(cmd/command {:command ::git-diff-file
              :desc "gitlight: diff this file"
              :exec (fn []
                      (git-diff (-> @(pool/last-active) :info :path)))})


(cmd/command {:command ::git-diff-repo
              :desc "gitlight: diff this repo"
              :exec (fn []
                      (git-diff ""))})
