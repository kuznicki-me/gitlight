(ns lt.plugins.gitlight.git
  (:require [lt.object :as object]
            [lt.objs.proc :as proc]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.files :as files]
            [lt.objs.popup :as popup]
            [lt.plugins.gitlight :refer [config]]
            [clojure.string :as string])
    (:require-macros [lt.macros :refer [defui behavior]]))


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
    (do (proc/exec {:command (:git-binary @config)
                :args    args
                :cwd     cwd
                :obj     obj})
      true)
    (do (popup/popup! {:header  "We couldn't guess git root"
                   :body    "Please rerun the command again on a file that is in a git repo."
                   :buttons [{:label "ok"}]})
      nil)))

(defn git-command-ignore-out [& args]
  (apply (partial git-command git-ignore-out) args))


(behavior ::ignore.out
          :desc "Ignore git command output."
          :triggers #{:proc.exit :proc.error}
          :reaction (fn [ obj data ]
                      (print data)))


(def git-ignore-out
  (object/create
   (object/object*
    ::git-ignore-out
    :tags [:git-ignore-out]
    :behaviors [::ignore.out])))

