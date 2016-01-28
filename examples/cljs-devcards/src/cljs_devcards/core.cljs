(ns cljs-devcards.core
  (:require
   [om.core :as om :include-macros true]
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defcard first-card
  (sab/html [:div
             [:h1 "This is not is your first devcard!"]]))

(defcard second-card
  (sab/html [:div
             [:h2 "This is not is your first devcard!"]]))

(defcard
  (fn [data-atom owner]
    (sab/html
     [:div
      [:h3 "Example Counter w/Initial Data: " (:count @data-atom)]
      [:button
       {:onClick (fn [] (swap! data-atom update-in [:count] inc))}
       "inc"]]))
  {:count 50})


(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

