(ns lt.plugins.gitlight.libs
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.plugins.gitlight.common-ui :as cui]
            [lt.objs.editor.pool :as pool]
            [clojure.string :as string]))

(defn now []
  (.toLocaleString (js/Date.)))

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

(defn current-file-path []
  (qu (-> @(pool/last-active) :info :path)))

(defn qsprint [s]
  (println (q&s s)))


(defn popup []
  (cui/input-popup "try to break us" "commit" qsprint))


(cmd/command {:command ::input-test
              :desc "gitlight: input sanitize test"
              :exec popup})


(defn wrap-post [wrapper fun]
  (fn [& args]
    (apply fun args)
    (wrapper)))
