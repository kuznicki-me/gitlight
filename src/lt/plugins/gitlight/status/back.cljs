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


(defn get-git-root [path]
  (files/parent (files/walk-up-find path ".git")))
  ;(if-not (= (files/basename path) path)
  ;  (if dir? (str path "/.git")
  ;    path
  ;    (get-git-root (files/parent path)))))

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
  [(str file) (cond (= status \#) :branch-name
                    (= status \A) :newfile
                    (= status \M) :modified
                    (= status \D) :deleted
                    (= status \R) :renamed
                    (= status \C) :copied
                    (= status \?) :untracked
                    (= status \#) :branch
                    (= status \!) :ignored
                    :else :unknown)])


(defn make-keyworded [keyword-function data]
  (let [[what-keyword test-function which-function] keyword-function]
    (let [filtered (filter test-function data)
          keyworded (map (fn [f] (keywording-file-status (which-function f) (rest (rest f)))) filtered)]
      [what-keyword keyworded])))

(defn parse-line [line]
  (let [X (first line)
        Y (second line)
        filename (subs line 3)]
    [X Y filename]))


(def keyword-functions
  ; keyword      function to filter with                   which element to use for keywording
  [[:staged      (fn [d] (in-sequence? "MADRC" (first d))) first]
   [:not-staged  (fn [d] (not (= \space (second d))))      second]
   [:untracked   (fn [d] (= \? (first d)))                 second]
   [:ignored     (fn [d] (= \! (first d)))                 second]])


(defn make-status [data]
  (into {} (for [key-fun keyword-functions]
   (make-keyworded key-fun data))))

(defn parse-porcelain [data]
  (let [splitted (string/split-lines (.toString data))
        parsed (map parse-line splitted)
        branch (first parsed)]
    {:git-root    (get-git-root (get-cwd))
     :branch-name (str (rest (rest branch)))
     :status      (make-status (rest parsed))}
  ))

(behavior ::shell-git.out
          :desc "When git command is executed, show its out"
          :triggers #{:proc.out}
          :reaction (fn [ obj data ]
                      (println (parse-porcelain data))
                      (object/raise obj :status (parse-porcelain data))))

(def shell-git-out ;shell out object
  (object/create
   (object/object*
    ::shell-git-out
    :tags [:shell-git-out]
    :behaviors [::shell-git.out])))
