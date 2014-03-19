(ns lt.plugins.gitlight.lib
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [clojure.string :as string]))


(defn quote [s]
  (str \" s \"))


(defn sanitize [s]
  (string/escape s
                 {\$ "\\$"
                  \` "\\`"
                  \" "\\\""}))

(defn q&s [s]
  (quote (sanitize s)))
