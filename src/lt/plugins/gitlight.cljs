(ns lt.plugins.gitlight
  (:require [lt.object :as object]
            [lt.objs.popup :as popup]
            [lt.objs.editor.pool :as pool])
  (:require-macros [lt.macros :refer [behavior]]))



(def config
  (object/create
   (object/object*
    ::config
    :tags #{::config}
    :max-history 64
    :git-binary "git"
    :git-timeout 100)))





(behavior ::config
          :triggers #{:object.instant}
          :desc "Configure gitlight"
          :reaction (fn [this new-config]
                      (object/merge! config new-config)))
