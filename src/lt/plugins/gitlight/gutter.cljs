;; shamelessly stolen from https://github.com/bfabry/gblame/
;; shower him with love <3

(ns lt.plugins.gitlight.gutter
  (:require [lt.object :as object]
            [lt.util.dom :as dom]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool])
  (:require-macros [lt.macros :refer [behavior defui]]))

(object/object* ::gutter-settings
                :width 50)


(def gutter-settings (object/create ::gutter-settings))


(defui make-gutter-marker [this on-click content]
  [:div.gutter-content
   {:style (str "width: " (:width @gutter-settings) "px; "
                "white-space: nowrap; "
                "overflow: hidden;")}
   content]
  :click (fn [] (on-click content)))


(defn show-gutter-data [this data]
  (let [current-gutters (set (js->clj (editor/option this "gutters")))
        gutter-div (dom/$ :div.CodeMirror-gutters (object/->content this))
        gutter-markers (map #(make-gutter-marker this println %) data)
        ed (editor/->cm-ed this)]
    (editor/operation this
                      (fn []
                        (editor/set-options this
                                            {:gutters (clj->js (conj current-gutters "gitlight-gutter"))})
                        (dom/set-css (dom/$ :div.gitlight-gutter gutter-div)
                                     {"width" (str (:width @gutter-settings) "px")})
                        (doall (map-indexed (fn [idx gutter-marker]
                                              (.setGutterMarker ed idx "gitlight-gutter" gutter-marker))
                               gutter-markers))
                        (object/raise this :refresh!)))))


(defn remove-gutters [this]
  (.clearGutter (editor/->cm-ed this) "gitlight-gutter")
  (dom/remove :div.gitlight-gutter (object/->content this))
  (let [gutter (js->clj (editor/option this "gutters"))]
    (editor/set-options this
                        {:gutters (clj->js
                                   (remove #{"gitlight-gutter"}
                                           gutter
                                           ))}))
  (object/raise this :refresh!))

