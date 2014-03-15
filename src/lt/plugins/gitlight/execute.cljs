(ns lt.plugins.gitlight.execute
  (:require [lt.object :as object]
            [lt.objs.notifos :as notifos])
  (:require-macros [lt.macros :refer [behavior]]))

(def exec (.-exec (js/require "child_process")))

(defn run [return-obj path command input]
;;   (notifos/working (str "Running: " command))
;;   (println path command input)
  (let [child-proc (exec command
                         (clj->js {"cwd" path})
                         (fn [err stdout stderr]
                           (if err
                             (object/raise return-obj :err err stderr)
                             (object/raise return-obj :out stdout stderr))))
        proc-input (.-stdin child-proc)]
    (.end proc-input input)))


(defn run-deaf [return-obj path command]
  (run return-obj path command ""))
