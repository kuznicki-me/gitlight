(ns lt.plugins.gitlight.branch
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [clojure.string :as string]
            [lt.plugins.gitlight :refer [config]]
            [lt.plugins.gitlight.git :as git]
            [lt.plugins.gitlight.libs :as lib]
            [lt.plugins.gitlight.diff :as diff]
            [lt.plugins.gitlight.stash :as stash]
            [lt.plugins.gitlight.execute :as exec]
            [lt.plugins.gitlight.common-ui :as cui]
            [lt.plugins.gitlight.remote-com :as remcom])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn git-branches []
  (let [commands-args [["branch" "--no-color" "-vv"]
                       ["remote" "-v"]
                       ["branch" "-r" "-v"]
                       ["stash" "list"]]
        commands-to-run (map #(partial git/git %) commands-args)]
  (exec/runfuns git-branch-output commands-to-run)))


(defn update-with-timeout []
  (js/setTimeout git-branches (:git-timeout @config)))

(def update-after (partial lib/wrap-post update-with-timeout))



(defn git-checkout [branch]
  (git/git ["checkout" branch]))

(defn checkout-button [branch]
  (cui/button branch (update-after git-checkout) [branch]))



(defn git-merge [branch]
  (git/git ["merge" branch]))

(defn merge-button [branch]
  (cui/button "merge" (update-after git-merge) [branch]))



(defn git-push-it! [branch]
  (remcom/git-push-remote-branch "origin" branch))

(defn push-button [branch]
  (cui/button "push it!" (update-after git-push-it!) [branch]))



(defn git-create-new-branch [branch]
  (git/git ["branch" branch]))

(defn git-new-branch-popup []
  (cui/input-popup "new branch name" "create" (update-after git-create-new-branch)))

(defn new-branch-button []
  (cui/button "make a new branch" git-new-branch-popup))



(defn git-delete-branch [branch]
  (git/git ["branch" "-D" branch]))

(defn delete-branch-button [branch]
  (cui/button "delete" (update-after git-delete-branch) [branch]))



(defn pull-button [branch]
  (cui/button "pull!" (update-after remcom/git-pull)))



(defn make-field [[the-class content]]
  [:td {:class the-class} content])

(defn make-row [fields]
  [:tr {:class (:class fields)}
   (map make-field (:content fields))])


(defn raw-fun->parsed-rows [raw fun]
  (map (comp make-row fun) (cui/raw->lines raw)))


(defn make-active-part [active? branch]
  (if active?
    [["this-one" "->"]
     ["checkout" (checkout-button branch)]
     ["pull"     (pull-button branch)]]
    [["delete"   (delete-branch-button branch)]
     ["checkout" (checkout-button branch)]
     ["merge"    (merge-button branch)]]))

(defn parse-branch-line [line]
  (let [active? (= \* (first line))
        current-or-not (if active? "current" "not-current")
        to_cut  (subs line 2)
        [branch sha1 desc] (string/split to_cut #"\s+" 3)]
    {:class current-or-not
     :content (conj (make-active-part active? branch)
                    ["sha" sha1]
                    ["push" (push-button branch)]
                    ["desc" desc])}))

(defn parse-branches [raw-data]
  (raw-fun->parsed-rows raw-data parse-branch-line))

(defn local-branches-ui [raw-branches]
  [:table
   (parse-branches raw-branches)
   [:tr
    [:td]
    [:td.new-branch (new-branch-button)]]])



(defn parse-remote-branch-line [line]
  (let [splitted (string/split line #"\s+" 4)]
    {:class "whatever"
     :content (map vector ["origin" "sha" "desc"] (rest splitted))}))

(defn parse-remote-branches [raw-data]
  (raw-fun->parsed-rows raw-data parse-remote-branch-line))

(defn remote-branches-ui [raw-remote-branches]
  [:table
   (parse-remote-branches raw-remote-branches)])



(defn parse-remote-line [line]
  (let [splitted (string/split line #"\s+" 3)]
    {:class "whatever"
     :content (map vector ["origin" "url" "type"] splitted)}))

(defn parse-remotes [raw-data]
  (raw-fun->parsed-rows raw-data parse-remote-line))

(defn remotes-ui [raw-remotes]
  [:table
   (parse-remotes raw-remotes)])


(defn stash->branch [stash branchname]
  (git/git ["stash" "branch" branchname stash]))

(defn stash->branch-popup [stash]
  (cui/input-popup "new branch name" "create"
                   (update-after (partial stash->branch stash))))

(defn parse-stash-line [line]
  (let [[stash-id desc] (string/split line #":" 2)
        delete-button (cui/button "delete"
                                  (update-after stash/stash-drop)
                                  [stash-id])
        apply-button (cui/button "apply"
                                 (update-after stash/stash-apply)
                                 [stash-id])
        pop-button (cui/button "pop" (update-after stash/stash-pop) [stash-id])
        branch-the-stash-button (cui/button "branch"
                                            stash->branch-popup
                                            [stash-id])
        diff-stash-button (cui/button "diff" diff/git-diff [nil nil stash-id])]
    {:class "stashes"
     :content [["delete" delete-button]
               ["stash" stash-id]
               ["diff" diff-stash-button]
               ["apply" apply-button]
               ["pop" pop-button]
               ["branch" branch-the-stash-button]
               ["desc" desc]]}))

(defn parse-stashes [raw-data]
  (raw-fun->parsed-rows raw-data parse-stash-line))

(defn stashes-ui [raw-stashes]
  (let [clear-button (cui/button "clear" (update-after stash/stash-clear))]
    [:table
     (parse-stashes raw-stashes)
     [:tr
      [:td {:class "clear"} clear-button]]]))



(defui branch-panel [this]
  (let [[branches remotes remote-branches stashes] (:results @this)]
    [:div.gitlight-branches
     [:h1 "Branches"]
     (local-branches-ui branches)
     [:hr]
     [:h1 "Remote branches"]
     (remote-branches-ui remote-branches)
     [:div ]
     [:h1 "Remotes"]
     (remotes-ui remotes)
     [:hr]
     [:h1 "Stashes"]
     (stashes-ui stashes)]))



(def git-branch-output (cui/make-output-tab-object "Git branches" ::gitlight-branches branch-panel))




(cmd/command {:command ::branches
              :desc "gitlight: branches"
              :exec git-branches})


