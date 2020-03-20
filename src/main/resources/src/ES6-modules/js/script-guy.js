// var vashoImage = document.getElementById("vasho");function getdudes() {
//     // querySelectorAll vytiahne nodeList, co nieje pole, takze musim pouzit kvoli
// // starsim prehliadacom Array.prototype.slice.call
//     var imagesElements = document.querySelectorAll('form img');
//
// // Vytvori ArrayList z kolekcii nodes
// // imagesElements = Array.from(imagesElements); toto je druha, jednoduchsia moznost
//     imagesElements = Array.prototype.slice.call(imagesElements);
//
//     return {
//         dudes: imagesElements
//     }
// }
// import 'lodash/lodash.min';
//
// import {Bros} from "./index.myModule";


import { Bros } from './index.myModule.js';


var imagesElements = Bros.dudes;

imagesElements.forEach(function (imageElement) {

    // load score from localstorage
    // updateDude(imageElement);
    Bros.updateDude(imageElement);

    // increase score
    imageElement.addEventListener('click', function () {
        Bros.increaseScoreForDude(imageElement);
    });

    // Possible event types on image Element
    let eventsArray = ['mouseover', 'mouseout'];
    Bros.guyHurtsAndUnhurt(eventsArray, imageElement);
});




document.getElementsByTagName("h1")[0].addEventListener('click', function () {
    var scoreNumber = localStorage.getItem("scoreNumber") ;
    if (scoreNumber == null) {
        scoreNumber = 0;
    } else {
        scoreNumber = +localStorage.getItem("scoreNumber");
    }

    scoreNumber++;

    localStorage.setItem("scoreNumber", scoreNumber);

    if (scoreNumber > 7) {
        localStorage.removeItem("scoreNumber");
    }
});