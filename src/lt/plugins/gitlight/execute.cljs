(ns lt.plugins.gitlight.execute
  (:require [lt.object :as object]
            [lt.objs.notifos :as notifos])
  (:require-macros [lt.macros :refer [behavior]]))

(def exec (.-exec (js/require "child_process")))

(defn run [return-obj path command input]
  (let [child-proc (exec command
                         (clj->js {"cwd" path})
                         (fn [err stdout stderr]
                           (object/raise return-obj
                                         (if err :err :out)
                                         command stdout stderr)))
        proc-input (.-stdin child-proc)]
    (.end proc-input input)))


(defn run-deaf [return-obj path command]
  (run return-obj path command ""))


(defn join-n-run [status this command stdout stderr]
  (swap! (:output @this) conj [status command stdout stderr])
  (let [funs (:funs @this)
        fun (first funs)
        tail (rest funs)]
    (if-not (nil? fun)
      (do
        (object/merge! this {:funs tail})
        (fun this))
      (object/raise (:return-obj @this) :mult-outs (rest @(:output @this))))))

(behavior ::run-funs-out
          :triggers [:out]
          :reaction (partial join-n-run :out))


(behavior ::run-funs-err
          :triggers [:err]
          :reaction (partial join-n-run :err))


(defn runfuns [return-obj funs]
  (let [output (object/create
                (object/object* ::foldl-outputs
                                :tags [:gitlight-log-history]
                                :return-obj return-obj
                                :funs funs
                                :output (atom [])
                                :behaviors [::run-funs-out
                                            ::run-funs-err]))]
    (object/raise output :out)))
