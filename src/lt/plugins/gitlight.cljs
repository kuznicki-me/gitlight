(ns lt.plugins.gitlight
  (:require [lt.object :as object])
  (:require-macros [lt.macros :refer [behavior]]))



(def config
  (object/create
   (object/object*
    ::config
    :tags #{::config}
    :git-status-refresh-rate 1000
    :git-binary "/usr/bin/git")))




(behavior ::config
          :triggers #{:object.instant}
          :desc "Configure gitlight"
          :reaction (fn [this new-config]
                      (object/merge! config new-config)))
