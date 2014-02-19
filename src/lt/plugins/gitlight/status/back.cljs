(ns lt.plugins.gitlight.status.back
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.proc :as proc]
            [lt.objs.notifos :as notifos]
            [lt.objs.editor.pool :as pool]
            [lt.objs.files :as files]
            [lt.objs.command :as cmd]
            [lt.objs.popup :as popup]
            [clojure.string :as string])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn on-cwd? []
  (not (nil? (pool/last-active))))

(defn get-cwd []
  (files/parent
   (-> @(pool/last-active) :info :path)))


(defn git-status []
  (if (on-cwd?)
    (proc/exec {:command "/usr/bin/git"
                :args    ["status"
                          "--porcelain"
                          "--branch"]
                :cwd     (get-cwd)
                :obj     shell-git-out})
    (popup/popup! {:header "We couldn't guess git root"
                   :body "Please run `git: status' again with file under git repo in editor tab"
                   :buttons [{:label "ok"}]})))



(defn in-sequence? [haystack needle]
  (if (nil? (some #{needle} (seq haystack)))
    nil
    true))

(defn keywording-file-status [status file]
  [(str file) (cond (= status \#) "branch-name"
                    (= status \A) "new file"
                    (= status \M) "modified"
                    (= status \D) "deleted"
                    (= status \R) "renamed"
                    (= status \C) "copied"
                    (= status \?) "untracked"
                    (= status \#) "branch"
                    (= status \!) "ignored")])


(defn make_to_commit [data]
  (let [filtered (filter (fn [d](in-sequence? "MADRC" (first d))) data)
        keyworded (map (fn [f] (keywording-file-status (first f) (rest (rest f)))) filtered)]
    [:to_commit keyworded]))

(defn make_not_staged [data]
  (let [filtered (filter (fn [d] (= \space (first d))) data)
        keyworded (map (fn [f] (keywording-file-status (second f) (rest (rest f)))) filtered)]
    [:not_staged keyworded]))

(defn make_untracked [data]
  (let [filtered (filter (fn [d] (= \? (first d))) data)
        keyworded (map (fn [f] (keywording-file-status (second f) (rest (rest f)))) filtered)]
    [:untracked keyworded]))

(defn make_ignored [data]
  (let [filtered (filter (fn [d] (= \! (first d))) data)
        keyworded (map (fn [f] (keywording-file-status (second f) (rest (rest f)))) filtered)]
    [:ignored keyworded]))

(defn make_keyworded [what-keyword test-function which-function dat]
  (let [filtered (filter test-function data)
        keyworded (map (fn [f] (keywording-file-status (which-function f) (rest (rest f)))) filtered)]
    [what-keyword keyworded]))

(defn parse-line [line]
  (let [X (first line)
        Y (second line)
        filename (subs line 3)]
    ;{(file-status X Y) filename}))
    [X Y filename]))

(defn make_status [data]
  (into {} (for [f [make_to_commit make_not_staged make_untracked make_ignored]]
   (f data))))

(def keyword-functions
  [[:to_commit   (fn [d](in-sequence? "MADRC" (first d)))  first]
   [:not_staged  (fn [d] (= \space (first d)))             second]
   [:untracked   (fn [d] (= \? (first d)))                 second]
   [:ignored     (fn [d] (= \! (first d)))                 second]])

(defn make_status [data]
  (into {} (for [f [make_to_commit make_not_staged make_untracked make_ignored]]
   (f data))))

(defn parse-porcelain [data]
  (let [splitted (string/split-lines (.toString data))
        parsed (map parse-line splitted)
        branch (first parsed)]
    {:branch-name (str (rest (rest branch)))
     :status (make_status (rest parsed))}
  ))

(behavior ::shell-git.out
          :desc "When git command is executed, show its out"
          :triggers #{:proc.out}
          :reaction (fn [ obj data ]
                      (.log js/console "I'm alive")
                      (print (parse-porcelain data))
                      (object/raise obj :status (parse-porcelain data))))

(def shell-git-out ;shell out object
  (object/create
   (object/object*
    ::shell-git-out
    :tags [:shell-git-out]
    :behaviors [::shell-git.out])))
