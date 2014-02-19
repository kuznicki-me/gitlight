(ns lt.plugins.gitlight.status.back
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.proc :as proc]
            [lt.objs.notifos :as notifos]
            [lt.objs.editor.pool :as pool]
            [lt.objs.files :as files]
            [lt.objs.command :as cmd]
            [lt.objs.popup :as popup]
            [lt.plugins.gitlight :refer [config]]
            [clojure.string :as string])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn get-git-root [path]
  (files/parent (files/walk-up-find path ".git")))

(defn on-cwd? []
  (not (nil? (pool/last-active))))

(defn get-cwd []
  (files/parent
   (-> @(pool/last-active) :info :path)))


(defn git-status []
  (if (on-cwd?)
    (proc/exec {:command (:git-binary @config)
                :args    ["status"
                          "--porcelain"
                          "--branch"]
                :cwd     (get-cwd)
                :obj     shell-git-out})
    (popup/popup! {:header "We couldn't guess git root"
                   :body "Please run `git: status' again with file under git repo in editor tab"
                   :buttons [{:label "ok"}]})))


(defn in-sequence? [haystack needle]
  (not (nil? (some #{needle} (seq haystack)))))


(defn parse-porcelain [data]
  (let [splitted (string/split-lines (.toString data))
        parsed (map parse-line splitted)
        branch (first parsed)]
    {:git-root    (get-git-root (get-cwd))
     :branch-name (str (last branch))
     :status      (make-status (rest parsed))}))

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
     :else [[filename :unknown :unknown]])))

(defn parse-porcelain [data]
  (let [splitted (string/split-lines (.toString data))
        branch (subs(first splitted) 3)
        parsed (map parse-and-keyword-line (rest splitted))]
    (print parsed)
    (print (group-by (fn [a] (nth a 2)) (apply concat parsed)))
    {:git-root    (get-git-root (get-cwd))
     :branch-name (str branch)
     :status       (group-by (fn [a] (nth a 2)) (apply concat parsed))
     }))


(behavior ::shell-git.out
          :desc "When git command is executed, show its out"
          :triggers #{:proc.out}
          :reaction (fn [ obj data ]
                      (object/raise obj :status (parse-porcelain data))))


(def shell-git-out ;shell out object
  (object/create
   (object/object*
    ::shell-git-out
    :tags [:shell-git-out]
    :behaviors [::shell-git.out])))
