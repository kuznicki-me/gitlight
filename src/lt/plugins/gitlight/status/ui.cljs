(ns lt.plugins.gitlight.status.ui
  (:require [lt.object :as object]
            [lt.objs.sidebar :as sidebar]
            [lt.objs.console :as console]
            [lt.objs.popup :as popup]
            [lt.objs.tabs :as tabs]
            [lt.util.dom :as dom]
            [lt.objs.cli :as cli]
            [lt.plugins.gitlight.status.back :as back]
            [lt.plugins.gitlight.git :as git]
            [lt.plugins.gitlight.remote-com :as remote]
            [lt.plugins.gitlight.common-ui :as cui]
            [lt.plugins.gitlight.branch :as branch]
            [lt.plugins.gitlight.diff :as diff]
            [lt.plugins.gitlight.libs :as lib]
            [lt.plugins.gitlight.history :as hist]
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


(def update-status-after (partial lib/wrap-post back/git-status))

(defn open-file [action filename]
  (cli/open-paths [(str (git/get-git-root) "/" filename)] false))


(def file-state->buttons
  {:merge-conflict [["resolve" back/git-add]
                    ["diff"   diff/git-diff-button]]
   :not-staged [["stage" back/git-add]
                ["diff"   diff/git-diff-button]
                ["checkout" back/git-checkout-file]]
   ;["stash"  nil]]
   :untracked [["add"    back/git-add]
               ;["ignore" nil]
               ["delete" back/bin-rm]]
   :staged [["unstage" back/git-reset]
            ["diff"   diff/git-diff-cached-button]]})



(def repo-ops [{:push   ["push"   remote/git-push]
                :pull   ["pull"   remote/git-pull]
                :fetch  ["fetch"  remote/git-fetch]}
               {:commit ["quick commit" back/git-commit]
                :cached-diff ["cached diff" diff/git-diff-cached-repo-button]}
               {:diff   ["diff"  diff/git-diff-repo-button]
                :inline-diff ["toggle inline diff" diff/toggle-git-diff-gutter]}
               {:command-history ["history" hist/command-history]}])
               ;:log    ["log"    nil]
               ;:merge  ["merge"  nil]
               ;:tag    ["tag"    nil]})


(defui file [file-state [filename t]]
  [:li {:class (name t)}
   (cui/button filename (update-status-after open-file) filename)
   [:br]
   (for [[button-text fun] (file-state file-state->buttons)]
     (cui/button button-text (update-status-after fun) [filename]))
   [:br]
   [:br]])



(defui group [g-name files]
  [:li {:class (name g-name)} [:h1 (g-name group-names)]
   [:ul.files (map (partial file g-name) files)]])



(defui status-ui [this branch git-root]
  [:div
   [:h1 [:nobr (cui/button (str "Branch: " branch) branch/git-branches)]]
   [:h2 [:nobr "Root: " git-root]]
   [:br]
   (for [option-group repo-ops]
     [:div
      (for [[button-text fun] (vals option-group)]
        (cui/button button-text (update-status-after fun)))])
   [:br]
   (cui/button "refresh" (update-status-after #()))

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


