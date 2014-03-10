(ns lt.plugins.gitlight.diff
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.proc :as proc]
            [lt.objs.tabs :as tabs]
            [lt.util.dom :as dom]
            [lt.objs.editor.pool :as pool]
            [clojure.string :as string]
            [lt.plugins.gitlight.git :as git]
            [lt.plugins.gitlight.common-ui :as cui])
  (:require-macros [lt.macros :refer [defui behavior]]))

(cmd/command {:command ::git-diff
              :desc "gitlight: diff"
              :exec (fn []
                      (git-diff))})


(behavior ::git-diff.out
          :desc "Ignore git command output."
          :triggers #{:proc.out}
          :reaction (fn [ obj data ]
                      (println data)))


(def git-diff-out
  (object/create
   (object/object*
    ::git-diff-out
    :tags [:git-dif-out]
    :behaviors [::git-diff.out])))


(defn git-diff []
  (git/git-command git-diff-out (-> @(pool/last-active) :info :path)))
