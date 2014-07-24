(ns lt.plugins.gitlight.remote-com
  (:require [lt.plugins.gitlight.git :as git]))



(defn git-fetch []
  (git/git ["fetch"]))



(defn git-push []
  (git/git ["push"]))


(defn git-push-remote-branch [remote branch]
  (git/git ["push" remote branch]))


(defn git-pull []
  (git/git ["pull"]))
