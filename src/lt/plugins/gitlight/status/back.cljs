(ns lt.plugins.gitlight.status.back
  (:require [lt.object :as object]
            [lt.objs.editor.pool :as pool]
            [lt.objs.files :as files]
            [lt.objs.notifos :as notifos]
            [lt.plugins.gitlight.git :as git]
            [lt.plugins.gitlight.common-ui :as cui]
            [lt.plugins.gitlight.commit :as commit]
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


(defn not-staged [X Y filename]
  (if (or (and (in-sequence? " MARC" X) (in-sequence? "MD" Y))
          (and (= \D X) (= \M Y)))
    [filename (keywording Y) :not-staged]))


(defn staged [X Y filename]
  (if (or (and (in-sequence? "MARC" X) (in-sequence? " MD" Y))
          (and (= \D X) (in-sequence? " M" Y)))
    [filename (keywording X) :staged]))


(defn merge-conflicts [X Y filename]
  (if-let [status (cond (and (= \D X) (= \D Y)) :unmerged-both-deleted
                        (and (= \A X) (= \U Y)) :unmerged-added-by-us
                        (and (= \U X) (= \D Y)) :unmerged-deleted-by-them
                        (and (= \U X) (= \A Y)) :unmerged-added-by-them
                        (and (= \D X) (= \U Y)) :unmerged-deleted-by-us
                        (and (= \A X) (= \A Y)) :unmerged-both-added
                        (and (= \U X) (= \U Y)) :unmerged-both-modified)]
    [filename status :merge-conflict]))


(defn others [X Y filename]
  (cond
   (and (= \? X) (= \? Y)) [filename :untracked :untracked]
   (and (= \! X) (= \! Y)) [filename :ignored :ignored]))


(defn get-status-for-line [line]
  (let [X (first line)
        Y (second line)
        filename (subs line 3)]
    (remove nil? (map (fn [fun] (fun X Y filename))
                      [not-staged staged merge-conflicts others]))))


(defn parse-git-status [lines]
  (apply concat (map get-status-for-line lines)))



(defn parse-porcelain [data]
  (let [splitted (string/split-lines (.toString data))
        branch (subs(first splitted) 3)
        parsed (parse-git-status (rest splitted))]
    {:branch-name (str branch)
     :status      (sort (group-by (fn [a] (nth a 2)) parsed))}))


(behavior ::git-status-out-success
          :desc "gitlight: When git status is executed, parse its output."
          :triggers #{:out}
          :reaction (fn [obj command stdout stderr]
                      (object/raise obj :add-watch)
                      (object/raise obj :status (parse-porcelain stdout))))

(behavior ::git-status-out-failure
          :desc "gitlight: When git status fails."
          :triggers #{:err}
          :reaction (fn [obj command stdout stderr]
                      (remove-watch pool/pool ::status-pool-watch)
                      (object/raise obj :status-failed)))


(behavior ::git-status-out-failure-verbose
          :desc "gitlight: Be verbose about git status fail"
          :type :user
          :triggers #{:err}
          :reaction (fn [obj command stdout stderr]
                      (notifos/set-msg! (str "git status failed! " (.toString stderr)))))


(def git-status-out
  (object/create
   (object/object*
    ::git-status-out
    :tags [:git-status-out]
    :behaviors [::git-status-out-success
                ::git-status-out-failure
;;                 ::git-status-out-failure-verbose
                ::refresh-ui-on-new-status])))


(defn git-status []
  (git/git-command git-status-out "status" "--porcelain" "--branch"))



(defn git-add [action filename]
  (git/git-add filename))


(defn git-commit [action filename]
  (cui/input-popup "commit message?" "commit"
                   (fn [msg]
                     (git/git-cmd-commit msg)
                     ;(git-status))))
                     )))


(defn git-reset [action filename]
  (git/git-reset filename))


(defn git-checkout-file [action filename]
  (git/git-checkout-file filename))


(defn bin-rm [action filename]
  (files/delete! (str (git/get-git-root) "/" filename)))
