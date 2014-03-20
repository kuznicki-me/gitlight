;; shamelessly stolen from https://github.com/bfabry/gblame/
;; shower him with love <3

(ns lt.plugins.gitlight.gutter
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.util.dom :as dom]
            [lt.objs.editor :as editor]
            [lt.objs.files :as files]
            [lt.objs.proc :as proc]
            [lt.objs.notifos :as notifos]
            [lt.objs.tabs :as tabs]
            [lt.objs.editor.pool :as pool]
            [clojure.string :as string]
            [lt.plugins.gitlight.execute :as exec]
            [lt.plugins.gitlight.diff :as diff]
            [lt.plugins.gitlight.git :as git])
  (:require-macros [lt.macros :refer [behavior defui]]))

(object/object* ::gutter-settings
                :width 50)


(def gutter-settings (object/create ::gutter-settings))


(defui make-gutter-marker [this on-click content]
  [:div.gutter-content
   {:style (str "width: " (:width @gutter-settings) "px; "
                "white-space: nowrap; "
                "overflow: hidden;")}
   [:pre content]]
  :click (fn [] (on-click content)))


(defn show-gutter-data [this data]
  (let [current-gutters (set (js->clj (editor/option this "gutters")))
        gutter-div (dom/$ :div.CodeMirror-gutters (object/->content this))
        gutter-markers (map #(make-gutter-marker this println %) data)
        ed (editor/->cm-ed this)]
    (editor/operation this
                      (fn []
                        (editor/set-options this
                                            {:gutters (clj->js (conj current-gutters "gutter"))})
                        (dom/set-css (dom/$ :div.gutter gutter-div)
                                     {"width" (str (:width @gutter-settings "px"))})
                        (doall (map-indexed (fn [idx gutter-marker]
                                              (.setGutterMarker ed idx "gutter" gutter-marker))
                               gutter-markers))
                        (object/raise this :refresh!)
                        ;; (object/add-tags this #{::git-blame-on})
                        ))


    )

  )

(defn char-to-val [c]
  (case c
    (\space nil) 0
    \+ 1
    \- -1
    0))


(defn line-value [line]
  (char-to-val (first line)))


(defn side-by-side [firsts]
  (let [partitioned (partition-by first firsts)]
    (first
     (reduce (fn [[ok stack] part]
               (println ok stack part)
               (let [[fst rst] (split-at 1 part)
                     left (count stack)
                     right (count part)]
                 (case (first fst)
                   \space  [(concat ok
                                    (if (empty? stack)
                                      fst
                                      [(str " -" (dec (count stack)) "↑")])
                                    rst)
                            []]
                   \- [ok part]
                   \+ [(concat ok
                               (map str part stack)
                               (repeat (- right left) "+"))
                       (repeat (- left right) "-")
                       ])))
             [[][]] partitioned))))



(behavior ::parse-diff-out
          :triggers [:out]
          :reaction (fn [this stdout stderr]
                      (let [parsed (drop 5 (string/split-lines (.toString stdout)))
                            firsts (map first parsed)]
                        (show-gutter-data
                         (pool/last-active)
                         (if (empty? firsts)
                           (repeat
                            (-> @(editor/->cm-ed (pool/last-active )) :doc :size)
                            " ")
                           (side-by-side firsts))))))


(behavior ::diff-err
          :triggers [:err]
          :reaction (fn [this err stderr]
                      (println "error" stderr)))

(def diff-out
  (object/create
   (object/object* ::diff-file-out
                   :tags #{::diff-file-out}
                   :behaviors [::parse-diff-out ::diff-err])))



(cmd/command {:command ::whatevers
              :desc "gutter test add"
              :exec (fn []
                      (exec/run-deaf diff-out
                                     (git/get-git-root)
                                     (str "git diff -U10000 -- " (-> @(pool/last-active) :info :path))))})
