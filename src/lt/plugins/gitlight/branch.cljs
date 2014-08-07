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
                       ["branch" "-r" "-v"]]
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


(defn local-branches-ui [branches]
  [:table
   (for [parsed (parse-data branches)
         :let [[this-one? [branch sha1 desc]] parsed]]
     [:tr
      [:td (if this-one?
             "->"
             (delete-branch-button branch))]
      [:td {:class (if this-one?
                     "current"
                     "not-current")} (checkout-button branch)]
      (if this-one?
        [:td.pull (pull-button branch)]
        [:td.merge (merge-button branch)])
      [:td sha1]
      [:td.push (push-button branch)]
      [:td desc]])
   [:tr
    [:td]
    [:td.new-branch (new-branch-button)]]])

(defn remote-branches-ui [remote-branches]
  [:table
   (for [branch (string/split-lines (.toString remote-branches))
         :let [[_ branch-name h tail] (string/split branch #"\s+" 4)]
         ]
     [:tr
      [:td branch-name]
      [:td h]
      [:td tail]
      ]
     )
   ])

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


(defui branch-panel [this]
  (let [[branches remotes remote-branches] (:results @this)]
    [:div.gitlight-branches
     [:h1 "Branches"]
     (local-branches-ui branches)
     [:hr]
     [:h1 "Remote branches"]
     (remote-branches-ui remote-branches)
     [:div ]
     [:h1 "Remotes"]
     (remotes-ui remotes)

     ]))



(defn git-branch-splitter [line]
  (let [active? (= \* (first line))
        to_cut  (subs line 2)
        splitted (string/split to_cut #"\s+" 3)]
      [active? splitted]))



(defn parse-data [data]
  (let [lines (string/split-lines (.toString data))]
    (map git-branch-splitter lines)))




(def git-branch-output (cui/make-output-tab-object "Git branches" ::gitlight-branches branch-panel))




(cmd/command {:command ::branches
              :desc "gitlight: branches"
              :exec git-branches})


