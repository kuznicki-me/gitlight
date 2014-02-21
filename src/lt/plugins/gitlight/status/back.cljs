(ns lt.plugins.gitlight.status.back
  (:require [lt.object :as object]
            [lt.objs.editor.pool :as pool]
            [lt.objs.files :as files]
            [lt.plugins.gitlight.git :as git]
            [clojure.string :as string])
  (:require-macros [lt.macros :refer [behavior]]))


(defn in-sequence? [haystack needle]
  (not (nil? (some #{needle} (seq haystack)))))


(defn keywording [status]
  (cond (= status \A) :newfile
        (= status \M) :modified
        (= status \D) :deleted
        (= status \R) :renamed
        (= status \C) :copied
        :else         :unknown))

(defn parse-and-keyword-line [line]
  (let [X (first line)
        Y (second line)
        filename (str (subs line 3))]
    (cond
     (and (= \space X) (in-sequence? "MD" Y)) [[filename (keywording Y) :not-staged ]]

     (and (in-sequence? "MARC" X) (= \space Y))          [[filename (keywording X) :staged]]
     (and (in-sequence? "MARC" X) (in-sequence? "MD" Y)) [[filename (keywording X) :staged]
                                                          [filename (keywording Y) :not-staged]]

     (and (= \D X) (= \space Y)) [[filename :deleted :staged]]
     (and (= \D X) (= \M Y))     [[filename :deleted :staged]
                                  [filename :modified :not-staged]]

     (and (= \D X) (= \D Y)) [[filename :unmerged-both-deleted    :merge-conflict]]
     (and (= \A X) (= \U Y)) [[filename :unmerged-added-by-us     :merge-conflict]]
     (and (= \U X) (= \D Y)) [[filename :unmerged-deleted-by-them :merge-conflict]]
     (and (= \U X) (= \A Y)) [[filename :unmerged-added-by-them   :merge-conflict]]
     (and (= \D X) (= \U Y)) [[filename :unmerged-deleted-by-us   :merge-conflict]]
     (and (= \A X) (= \A Y)) [[filename :unmerged-both-added      :merge-conflict]]
     (and (= \U X) (= \U Y)) [[filename :unmerged-both-modified   :merge-conflict]]

     (and (= \? X) (= \? Y)) [[filename :untracked :untracked]]
     (and (= \! X) (= \! Y)) [[filename :ignored :ignored]]
     :else                   [[filename :unknown :unknown]])))


(defn parse-porcelain [data]
  (let [splitted (string/split-lines (.toString data))
        branch (subs(first splitted) 3)
        parsed (map parse-and-keyword-line (rest splitted))]
    {;:git-root    (get-git-root)
     :branch-name (str branch)
     :status      (group-by (fn [a] (nth a 2)) (apply concat parsed))
     }))


(behavior ::git-status.out
          :desc "When git status is executed, parse its output."
          :triggers #{:proc.out}
          :reaction (fn [ obj data ]
                      (object/raise obj :status (parse-porcelain data))))


(def git-status-out
  (object/create
   (object/object*
    ::git-status-out
    :tags [:git-status-out]
    :behaviors [::git-status.out])))


(defn git-status []
  (git/git-command git-status-out "status" "--porcelain" "--branch"))
