(ns lt.plugins.gitlight
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.proc :as proc]
            [lt.objs.notifos :as notifos]
            [lt.objs.editor.pool :as pool]
            [lt.objs.files :as files]
            [lt.objs.command :as cmd]
            [clojure.string :as string])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defn get-cwd []
  (let
    [filename (-> @(pool/last-active) :info :path)]
    (files/parent filename)))

(defn get-branch [fist-line]
  (second (string/split first-line #"On branch ")))

(defn git-status []
  (let [dir (get-cwd)]
    (proc/exec {:command "/usr/bin/git"
                :args    [:status]
                :cwd     dir
                :obj     shell-git-out})))

(defui git-output [this]
  [:h1 "asdf"])

(defn mangle-data [data]
  (let [splitted (string/split (.toString data) #"#")]
    (do
      (println (get-branch (second splitted)))
      )))

(behavior ::shell-git.out
          :desc "When git command is executed, show its out"
          :triggers #{:proc.out}
          :reaction (fn [ obj data ]
                      (mangle-data data)))
                      ;(println (get-branch (second (string/split (.toString data) #"#")))))))
                      ;(notifos/set-msg! (.toString data))))

(def shell-git-out ;shell out object
  (object/create
   (object/object*
    ::shell-git-out
    :tags [:shell-git-out]
    :behaviors [::shell-git.out])))


(cmd/command
 {:command  ::git-status
  :desc     "git: status"
  :exec     git-status})
