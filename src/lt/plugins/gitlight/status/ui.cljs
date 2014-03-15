(ns lt.plugins.gitlight.status.ui
  (:require [lt.object :as object]
            [lt.objs.sidebar :as sidebar]
            [lt.objs.console :as console]
            [lt.objs.popup :as popup]
            [lt.objs.tabs :as tabs]
            [lt.util.dom :as dom]
            [lt.plugins.gitlight.status.back :as back]
            [lt.plugins.gitlight.commit :as commit]
            [lt.plugins.gitlight.git :as git]
            [lt.plugins.gitlight.remote-com :as remote]
            [lt.plugins.gitlight.common-ui :as cui]
            [lt.plugins.gitlight.branch :as branch]
            [lt.plugins.gitlight.diff :as diff]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn resize-rightbar [width]
  (object/merge! tabs/multi {(:side @sidebar/rightbar) width})
  (object/merge! sidebar/rightbar {:width width :max-width width}))


(def group-names {:merge-conflict "Merge conflicts"
                  :not-staged "Not staged"
                  :staged     "Staged"
                  :untracked  "Untracked"
                  :ignored    "Ignored" })


(defn dom-scroll-width [n]
  (.-scrollWidth n))



(defn resize-to-content [parent child]
  (resize-rightbar (+
                    (- (dom/width parent) (dom/width child)) ; typical size diff between parent and a child
                    (dom-scroll-width child))))


(defn is-open? []
  (= (:active @sidebar/rightbar)
     status-bar))


(defn make-button-and-update [n f fun]
  (cui/make-button n f (fn [x y] (fun x y) (back/git-status))))

(def file-ops {:merge-conflict[["resolve" back/git-add]
                               ["diff"   diff/git-diff-button]]
               :not-staged [["stage" back/git-add]
                            ["diff"   diff/git-diff-button]
                            ["checkout" back/git-checkout-file]]
                            ;["stash"  nil]]
               :untracked [["add"    back/git-add]
                           ;["ignore" nil]
                           ["delete" back/bin-rm]]
               :staged [["unstage" back/git-reset]]})



(def repo-ops {:commit ["commit" commit/git-commit]
               :push   ["push"   remote/git-push]
               :pull   ["pull"   remote/git-pull]
               :fetch  ["fetch"  remote/git-fetch]
               :diff   ["diff"  diff/git-diff-repo-button]})
               ;:log    ["log"    nil]
               ;:merge  ["merge"  nil]
               ;:tag    ["tag"    nil]})


(defui file [g-name [f t]]
  [:li {:class (name t)}
   (make-button-and-update f f nil)
   [:br]
   (for [[bt fun] (g-name file-ops)]
     (make-button-and-update bt f fun))
   [:br]
   [:br]])



(defui group [g-name files]
  [:li {:class (name g-name)} [:h1 (g-name group-names)]
   [:ul.files (map (partial file g-name) files)]])



(defui status-ui [this branch git-root]
  [:div
   ;[:h1 (str "test: " (.random js/Math))]
   [:h1 [:nobr (str "Branch: ")
         (make-button-and-update branch
                                 (str "Branch menu")
                                 (fn [x y] (branch/git-branches)))]]
;;    [:h2 [:nobr "Root: " (make-button-and-update git-root "Change repo" nil)]]
   [:h2 [:nobr "Root: " git-root]]
   [:br]
   (for [[bname fun] (vals repo-ops)]
     (make-button-and-update bname git-root fun))

   [:br]
   [:br]
   [:br]
   [:ul (for [[g fs] this]
          (if-not (zero? (count fs))
            (group g fs)))]])



(defui wrapper [this]
  [:div.gitlight-status {:style "overflow: scroll;"} "Waiting for git..."])




(behavior ::update
          :desc "update status view"
          :triggers #{:refresh}
          :reaction (fn [ obj status branch]
                      (let [bar-dom (:content @obj)]
                        (cui/dom-truncate bar-dom) ; clear content
                        (dom/append bar-dom (status-ui status branch (git/get-git-root)))
                        (resize-to-content (dom/parent bar-dom) bar-dom))))



(object/object* ::status
                :tags #{::status}
                :label "GIT"
                :behaviors [::update]
                :order 2
                :init (fn [this]
                        (wrapper @this)))



(def status-bar (object/create ::status))


