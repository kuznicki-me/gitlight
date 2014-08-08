(ns lt.plugins.gitlight.stash
  (:require [lt.plugins.gitlight.git :as git]))


(defn git-fetch []
  (git/git ["stash"]))

(defn git-pop [stash]
  (git/git ["pop"] stash))

(defn git-apply [stash]
  (git/git ["apply"] stash))
