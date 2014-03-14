(ns lt.plugins.gitlight.execute
  (:require [lt.object :as object]
            [lt.objs.notifos :as notifos])
  (:require-macros [lt.macros :refer [behavior]]))

(def exec (.-exec (js/require "child_process")))

(defn run [return-obj path command input]
  "path, command and input - strings
  raises :err and :out to return-obj on failure/success"
  (notifos/working (str "Running: " command))
  (let [child-proc (exec command
                         (clj->js {"cwd" path})
                         (fn [err stdout stderr]
                           (if err
                             (object/raise return-obj :err err stderr)
                             (object/raise return-obj :out stdout stderr))))
        proc-input (.-stdin child-proc)]
    (.end proc-input input)))
