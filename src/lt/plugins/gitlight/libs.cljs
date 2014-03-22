(ns lt.plugins.gitlight.lib
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.plugins.gitlight.common-ui :as cui]
            [clojure.string :as string]))


(defn qu [s]
  (str \" s \"))


(defn sanitize [s]
  (string/escape s
                 {\$ "\\$"
                  \` "\\`"
                  \\ "\\\\"
                  \" "\\\""}))

(defn q&s [s]
  (qu (sanitize s)))



(defn qsprint [s]
  (println (q&s s)))


(defn popup []
  (cui/input-popup "try to break us" "commit" qsprint))


(cmd/command {:command ::input-test
              :desc "gitlight: input sanitize test"
              :exec popup})
