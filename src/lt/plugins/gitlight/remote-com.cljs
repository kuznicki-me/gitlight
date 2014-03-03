(ns lt.plugins.gitlight.fetch
  (:require [lt.plugins.gitlight.git :as git]))



(defn git-fetch []
  (git/git-command-ignore-out "fetch"))



(defn git-push []
  (git/git-command-ignore-out "push"))



(defn git-pull []
  (git/git-command-ignore-out "pull"))
