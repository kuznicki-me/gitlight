(ns lt.plugins.gitlight.stash
  (:require [lt.plugins.gitlight.git :as git]))


(defn stash []
  (git/git ["stash"]))

(defn stash-pop [stash]
  (git/git ["stash" "pop" stash]))

(defn stash-apply [stash]
  (git/git ["stash" "apply" stash]))
