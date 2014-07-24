(ns lt.plugins.gitlight.diff
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.util.dom :as dom]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [clojure.string :as string]
            [lt.plugins.gitlight.gutter :as gut]
            [lt.plugins.gitlight.libs :as lib]
            [lt.plugins.gitlight.git :as git]
            [lt.plugins.gitlight.common-ui :as cui])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn click-run-function-update [fun up x y]
  (fun)
  (up))


(def context (atom 3))

; necessary for update
(def last-filename (atom nil))
(def last-cached (atom false))



(defn git-diff-update-fun []
  (git-diff @last-filename @last-cached))



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


(defn cached-toggle-button []
  (let [cached-txt (if @last-cached "unstaged changes" "staged changes")]
    (cui/make-button cached-txt cached-txt
                     (fn []
                       (swap! last-cached not)
                       (git-diff-update-fun)))))


(defui commit-input []
  [:input.title {:type "text"
                 :size 81
           :placeholder "commit title"}])
;;   :focus (fn []
;;            (ctx/in! :popup.input))
;;   :blur (fn []
;;           (ctx/out! :popup.input)))


(defui commit-body []
  [:textarea.body {:placeholder "commit body"
                   :cols 81
                   :rows 10}])

(defn make-commit-form []
   (let [title (commit-input)
         body (commit-body)]

  [:div.commit-form
   title [:br]
   body [:br]
   (cui/make-button "submit" "submit" (fn [x y]
                                        (git/git-commit (dom/val title) (dom/val body))
                                        (git-diff-update-fun)))]))


(defui diff-panel [this]
  (let [output (:result @this)]
    [:div.gitlight-diff
     [:h1 "diff: " (if (= "" @last-filename) "whole repo" @last-filename)]
     (make-context)
     (make-more-context)
     (cached-toggle-button)

     (when @last-cached
       (make-commit-form))

     (for [file (parse-git-diff output)
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



(defn git-diff
  ([filepath] (git-diff filepath false))
  ([filepath cached?] (let [contextstr (str "-U" @context)
                            args ["diff" "--no-color" contextstr
                                  (when cached? "--cached")
                                  "--" filepath]]
                        (reset! last-filename filepath)
                        (reset! last-cached cached?)
                        (git/git args git-diff-output))))


(defn git-diff-button [action filename]
  (git-diff filename))

(defn git-diff-cached-button [action filename]
  (git-diff filename true))

(defn git-diff-repo-button [action filename]
  (git-diff ""))

(defn git-diff-cached-repo-button [action filename]
  (git-diff "" true))



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



(defui style-diff-marker [[p m :as content]]
  [:div {:class (cond
                 (and (= p " ") (nil? m)) "no-change"
                 (and (= p "+") (nil? m)) "added-line"
                 (and (= p " ") (= "-" (first m))) "deleted-lines"
                 (and (= p "+") (= "-" (first m))) "modified-line")}
   content])


(behavior ::parse-diff-gutter-out
          :triggers [:out]
          :reaction (fn [this command stdout stderr]
                      (let [parsed (drop 5 (string/split-lines (.toString stdout)))
                            firsts (map first parsed)]
                        (gut/show-gutter-data
                         (pool/last-active)
                         println
                         style-diff-marker
                         (if (empty? firsts)
                           (repeat
                            (.-size (.-doc (editor/->cm-ed (pool/last-active))))
                            " ")
                           (side-by-side firsts))))))


(behavior ::diff-gutter-err
          :triggers [:err]
          :reaction (fn [this command stdout stderr]
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
  (git/git ["diff" "-U10000" "--" (lib/current-file-path)]
           git-diff-gutter-out))


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
                      (git-diff (lib/current-file-path)))})


(cmd/command {:command ::git-diff-repo
              :desc "gitlight: diff this repo"
              :exec (fn []
                      (git-diff ""))})
