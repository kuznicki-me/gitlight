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
    :git-status-refresh-rate 1000
    :git-binary "/usr/bin/git")))




(behavior ::config
          :triggers #{:object.instant}
          :desc "Configure gitlight"
          :reaction (fn [this new-config]
                      (object/merge! config new-config)))



(behavior ::popup-error
          :triggers #{:raise-error-popup}
          :desc "Raise error popup."
          :reaction (fn [ obj ]
                      (remove-watch pool/pool :lt.plugins.gitlight.status.back/status-pool-watch)
                      (popup/popup! {:header  "We couldn't guess git root"
                                     :body    "Please rerun the command again on a file that is in a git repo."
                                     :buttons [{:label "ok"}]})))


(def error
  (object/create
   (object/object*
    ::error
    :tags #{::error}
    :behaviors [::popup-error])))
