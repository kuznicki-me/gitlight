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
            [lt.plugins.gitlight.stash :as stash]
            [lt.plugins.gitlight.libs :as lib]
            [lt.plugins.gitlight.history :as hist]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn resize-rightbar [width]
  (object/merge! tabs/multi {(:side @sidebar/rightbar) width})
  (object/merge! sidebar/rightbar {:width width :max-width width}))


(def state-names {:merge-conflict "Merge conflicts"
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

(defn open-file [filename]
  (cli/open-paths [(str (git/get-git-root) "/" filename)] false))


(def file-state->buttons
  {:merge-conflict [["resolve"  git/git-add]
                    ["diff"     diff/git-diff-button]]
   :not-staged     [["stage"    git/git-add]
                    ["diff"     diff/git-diff-button]
                    ["checkout" git/git-checkout-file]]
   :untracked      [["add"      git/git-add]
                    ; ["ignore"   nil]
                    ["delete"   back/bin-rm]]
   :staged         [["unstage"  git/git-reset]
                    ["diff"     diff/git-diff-cached-button]]})



(def repo-options
  [[["push"               remote/git-push]
    ["pull"               remote/git-pull]
    ["fetch"              remote/git-fetch]]
   [["quick commit"       back/git-commit]
    ["cached diff"        diff/git-diff-cached-repo-button]
    ; ["tag" nil]
    ]
   [["diff"               diff/git-diff-repo-button]
    ["toggle inline diff" diff/toggle-git-diff-gutter]]
   [["history"            hist/command-history]
    ; ["log" nil]
    ]
   [["stash"              stash/stash]
    ["apply"              stash/stash-apply]
    ["pop"                stash/stash-pop]]])


(defui file-ui [state-keyword [filename file-state]]
  [:li {:class (name file-state)}
   (cui/button filename (update-status-after open-file) [filename])
   [:br]
   (for [[button-text fun] (state-keyword file-state->buttons)]
     (cui/button button-text (update-status-after fun) [filename] button-text))
   [:br]
   [:br]])



(defui ui-for-files-in-state [state-keyword files]
  [:li {:class (name state-keyword)}
   [:h1 (state-keyword state-names)]
   [:ul.files (map (partial file-ui state-keyword) files)]])



(defui status-ui [status-parsed branch git-root]
  [:div
   [:h1 [:nobr (cui/button (str "Branch: " branch) branch/git-branches)]]
   [:h2 [:nobr "Root: " git-root]]
   [:br]
   (for [opions repo-options]
     [:div
      (for [[button-text fun] opions]
        (cui/button button-text (update-status-after fun)))])
   [:br]
   (cui/button "refresh" (update-status-after #()))

   [:br]
   [:br]
   [:br]
   [:ul
    (for [[state-keyword files] status-parsed]
      (if-not (zero? (count files))
        (ui-for-files-in-state state-keyword files)))]])



(defui wrapper [this]
  [:div.gitlight-status {:style "overflow: scroll;"} "Waiting for git..."])




(behavior ::update
          :desc "update status view"
          :triggers #{:refresh}
          :reaction (fn [obj status-parsed branch]
                      (let [bar-dom (:content @obj)]
                        (cui/dom-truncate bar-dom) ; clear content
                        (dom/append bar-dom (status-ui status-parsed branch (git/get-git-root)))
                        (resize-to-content (dom/parent bar-dom) bar-dom))))



(object/object* ::status
                :tags #{::status}
                :label "GIT"
                :behaviors [::update]
                :order 2
                :init (fn [this]
                        (wrapper @this)))



(def status-bar (object/create ::status))


