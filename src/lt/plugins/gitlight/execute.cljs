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
                           (object/raise return-obj (if err :err :out) command stdout stderr)))
        proc-input (.-stdin child-proc)]
    (.end proc-input input)))


(defn run-deaf [return-obj path command]
  (run return-obj path command ""))




(defn join-outputs [output [path command input]]
  (println "hello join")
  (println path command input)
  (swap! output conj command)
  (let [child-proc (exec cmnd
                         (clj->js {"cwd" path})
                         (fn [err stdout stderr]
                           (swap! output conj [(if err :err :out)
                                               command
                                               stdout
                                               stderr])))
        proc-input (.-stdin child-proc)]
    (.end proc-input input)))

(behavior ::run-mult
          :triggers [:out :err]
          :reaction (fn [this command stdout stderr]
                      (swap! (:output @this) conj [command stdout stderr])
                      (let [paths&commands&input (:paths-commands-inputs @this)
                            [path cmd input] (first paths&commands&input)
                            tail (rest paths&commands&input)]
                        (if-not (nil? cmd)
                          (do
                            (println "herehere")
                            (object/merge! this {:paths-commands-inputs tail})
                            (run this path cmd input))
                          (object/raise (@this :return-obj) :mult-outs (rest @(@this :output)))))))


(defn run-multiple-commands [return-obj paths commands inputs]
  (println commands)
  (let [output (object/create
                (object/object* ::join-outputs
                                :return-obj return-obj
                                :paths-commands-inputs (map vector paths commands inputs)
                                :output (atom [])
                                :behaviors [::run-mult]))]
    (object/raise output :out)))


(defn run-mult-same-path [return-obj path commands inputs]
  (run-multiple-commands return-obj (repeat path) commands inputs))


(defn runds [return-obj path commands]
  (run-mult-same-path return-obj path commands (repeat "")))
