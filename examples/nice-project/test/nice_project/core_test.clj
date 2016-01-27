(ns nice-project.core-test
  (:require [clojure.test :refer :all]
            [nice-project.core :refer :all]))

(deftest add-3-test
  (testing "I will success."
    (is (= (add-3 10) 13))))

(deftest add-3-test-failed
  (testing "I fail."
    (is (= (add-3 10) 10))))
