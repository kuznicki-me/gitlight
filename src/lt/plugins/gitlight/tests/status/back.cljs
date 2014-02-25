(ns lt.plugins.gitlight.tests.status.back
  (:require [lt.object :as object]
            [lt.plugins.gitlight.status.back :as back]
            [lt.plugins.gitlight.tests.lib :as t])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defn random-str []
  (let [r (+ 10 (rand-int 10))]
    (apply str (repeatedly r #(char (+ (rand-int 26) 97))))))

(for [x [" " "M" "A" "R" "C" "D" "U"] y [" " "M" "A" "D" "U"]]
  ;(println (str "::" x y " " (random-str))))
  (back/get-status-for-line (str x y " " (random-str))))




(def data
    ;; ' ' ' '
  '(()
    ;; ' ' 'M'
    ((:filename :modified :not-staged))
    ;; ' ' 'A'
    ()
    ;; ' ' 'D'
    ((:filename :deleted :not-staged))
    ;; ' ' 'U'
    ()
    ;; 'M' ' '
    ((:filename :modified :staged))
    ;; 'M' 'M'
    ((:filename :modified :staged) (:filename :modified :not-staged))
    ;; 'M' 'A'
    ()
    ;; 'M' 'D'
    ((:filename :modified :staged) (:filename :deleted :not-staged))
    ;; 'M' 'U'
    ()
    ;; 'A' ' '
    ((:filename :newfile :staged))
    ;; 'A' 'M'
    ((:filename :newfile :staged) (:filename :modified :not-staged))
    ;; 'A' 'A'
    ((:filename :unmerged-both-added :merge-conflict))
    ;; 'A' 'D'
    ((:filename :newfile :staged) (:filename :deleted :not-staged))
    ;; 'A' 'U'
    ((:filename :unmerged-added-by-us :merge-conflict))
    ;; 'R' ' '
    ((:filename :renamed :staged))
    ;; 'R' 'M'
    ((:filename :renamed :staged) (:filename :modified :not-staged))
    ;; 'R' 'A'
    ()
    ;; 'R' 'D'
    ((:filename :renamed :staged) (:filename :deleted :not-staged))
    ;; 'R' 'U'
    ()
    ;; 'C' ' '
    ((:filename :copied :staged))
    ;; 'C' 'M'
    ((:filename :copied :staged) (:filename :modified :not-staged))
    ;; 'C' 'A'
    ()
    ;; 'C' 'D'
    ((:filename :copied :staged) (:filename :deleted :not-staged))
    ;; 'C' 'U'
    ()
    ;; 'D' ' '
    ((:filename :deleted :staged))
    ;; 'D' 'M'
    ((:filename :deleted :staged) (:filename :modified :not-staged))
    ;; 'D' 'A'
    ()
    ;; 'D' 'D'
    ((:filename :unmerged-both-deleted :merge-conflict))
    ;; 'D' 'U
    ((:filename :unmerged-deleted-by-us :merge-conflict))
    ;; 'U' ' '
    ()
    ;; 'U' 'M'
    ()
    ;; 'U' 'A'
    ((:filename :unmerged-added-by-them :merge-conflict))
    ;; 'U' 'D'
    ((:filename :unmerged-deleted-by-them :merge-conflict))
    ;; 'U' 'U'
    ((:filename :unmerged-both-modified :merge-conflict))))


(defn change-filenames [filename x]
  (into [] (map #(if (= :filename %)
                  filename
                  %) x)))



(defn test-data [pair]
  (let [[n what] pair
        [tst parsed] what
        [X Y filename] tst
        d (nth data n)
        what-should-be (sort (map (partial change-filenames filename) d))
        what-is (sort parsed)]
    (= what-should-be what-is)))


(defn generate-test-data []
  (for [x [" " "M" "A" "R" "C" "D" "U"]
        y [" " "M" "A" "D" "U"]]
    (let [filename (random-str)]
      [[x y filename] (back/get-status-for-line (str x y " " filename))])))


(defn run-tests [] (every? identity
                           (map test-data
                                (map-indexed vector (generate-test-data)))))


(t/def-test ::back-tests
            (fn []
              (t/asrt "git status backend" (run-tests))))

