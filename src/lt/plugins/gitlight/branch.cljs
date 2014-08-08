(ns lt.plugins.gitlight.branch
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [clojure.string :as string]
            [lt.plugins.gitlight.git :as git]
            [lt.plugins.gitlight.libs :as lib]
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

(def update-after (partial lib/wrap-post git-branches))


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

(defn raw->lines [raw-data]
  (string/split-lines (.toString raw-data)))

(defn parse-branches [raw-data]
  (map parse-branch-line (raw->lines raw-data)))

(defn local-branches-ui [raw-branches]
  [:table
   (map make-row (parse-branches raw-branches))
   [:tr
    [:td]
    [:td.new-branch (new-branch-button)]]])

(defn parse-remote-branch-line [line]
  (let [splitted (string/split line #"\s+" 4)]
    {:class "whatever"
     :content (map vector ["origin" "sha" "desc"] (rest splitted))})
  )

(defn parse-remote-branches [raw-data]
  (map parse-remote-branch-line (raw->lines raw-data)))

(defn remote-branches-ui [raw-remote-branches]
  [:table
   (map make-row (parse-remote-branches raw-remote-branches))])

(defn remotes-ui [remotes]
  [:table
   (for [remote (string/split-lines (.toString remotes))
         :let [[r url what] (string/split remote #"\s+" 3)]]
     [:tr
      [:td r]
      [:td url]
      [:td what]]
     )
   ])

(defn stashes-ui [stashes]
  [:table
   (for [stash (string/split-lines (.toString stashes))]
     [:tr
      [:td stash]])
   ])

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


