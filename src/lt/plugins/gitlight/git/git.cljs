(ns lt.plugins.gitlight.git
  (:require [lt.object :as object]
            [lt.objs.proc :as proc]
            [lt.objs.editor.pool :as pool]
            [lt.objs.files :as files]
            [lt.objs.popup :as popup]
            [lt.plugins.gitlight :refer [config]]
            [clojure.string :as string]))


(defn on-cwd? []
  (not (nil? (pool/last-active))))


(defn get-cwd []
  (files/parent
   (-> @(pool/last-active) :info :path)))


(defn get-git-root []
  (if (on-cwd?)
    (let [cwd (files/walk-up-find (get-cwd) ".git")]
      (if-not (nil? cwd)
        (files/parent cwd)))))


(defn git-command [obj & args]
  (if-let [cwd (get-git-root)]
    (proc/exec {:command (:git-binary @config)
                :args    args
                :cwd     cwd
                :obj     obj})
    (popup/popup! {:header  "We couldn't guess git root"
                   :body    "Please rerun the command again on a file that is in a git repo."
                   :buttons [{:label "ok"}]})))
