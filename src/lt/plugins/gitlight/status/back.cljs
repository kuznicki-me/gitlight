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


(defn get-cwd []
  (if-let [l (pool/last-active)] (let
                                   [filename (-> @l :info :path)]
                                   (files/parent filename))
    (popup/popup! {:header "We couldn't guess git root"
                   :body "Please run `git: status' again with file under git repo in editor tab"
                   :buttons [{:label "ok"}]})))


(defn get-branch [data]
  (second (string/split data #"On branch ")))


(defn delete-inside-parens [data]
  (let [line-with-no-hash (string/replace-first data #"#" " ")
        trimmed (string/trim line-with-no-hash)]
    (string/replace (str trimmed) #"^\(.*\)$" "")))



(defn get-files [data]
  (let [first-line-fix (str "#" data)
        splitted (string/split-lines first-line-fix)
        filtered (filter #(.startsWith %1 "#") splitted)
        no-parens (map delete-inside-parens filtered)]
    (filter #(not (string/blank? %1)) no-parens)))



(defn git-status []
  (let [dir (get-cwd)]
    (proc/exec {:command "/usr/bin/git"
                :args    [:status
                          (keyword "--porcelain")
                          (keyword "--branch")]
                :cwd     dir
                :obj     shell-git-out})))



(defn split-and-swap [filename]
  (let [[a b] (string/split filename #":" 2)]
    [(string/trim b) (keyword a)]))



(defn split-property [filenames]
  (map split-and-swap filenames))



(defn make-a-category [data]
  (let [cat (first data)
        filenames (rest data)]
    (cond (= cat "to be committed:")       [:to_commit (split-property filenames)]
          (= cat "not staged for commit:") [:not_staged (split-property filenames)]
          (= cat "files:")                 [:untracked (map (fn [f] [f :untracked]) filenames)]
          :else                            [:unknown  (map (fn [f] [f :unknown]) filenames)])))

(defn in-sequence? [haystack needle]
  (if (nil? (some #{needle} (seq haystack)))
    nil
    true))

(defn keywording-file-status [status file]
  [(str file) (keyword (cond (= status \#) "branch-name"
                             (= status \A) "new file"
                             (= status \M) "modified"
                             (= status \D) "deleted"
                             (= status \R) "renamed"
                             (= status \C) "copied"
                             (= status \?) "untracked"
                             (= status \#) "branch"
                             (= status \!) "ignored"))])


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
  (let [filtered (filter (fn [d] (= \? (first d))) data)
        keyworded (map (fn [f] (keywording-file-status (second f) (rest (rest f)))) filtered)]
    [:ignored keyworded]))

(defn parse-line [line]
  (let [X (first line)
        Y (second line)
        filename (subs line 3)]
    ;{(file-status X Y) filename}))
    [X Y filename]))

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


(defn mangle-data [data]
  (let [splitted (string/split (.toString data) #"#" 3)
        branch-line (second splitted)
        splitted-by-changes (string/split (nth splitted 2) #"Changes|Untracked")
        grouped-by-fields (rest (map get-files splitted-by-changes))]
    (println (parse-porcelain data))
    (println {:branch-name (get-branch branch-line)
     :status (into {} (map make-a-category grouped-by-fields))})
    ))
   ; (do
   ;   (println (get-branch branch-line))
   ;   ;(println splitted-by-changes)
   ;   (println (rest (map get-files splitted-by-changes)))
   ;   (println (map make-a-category grouped-by-fields))
   ;   )))

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
