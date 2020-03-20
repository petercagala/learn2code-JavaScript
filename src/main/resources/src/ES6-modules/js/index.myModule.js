// querySelectorAll vytiahne nodeList, co nieje pole, takze musim pouzit kvoli
// starsim prehliadacom Array.prototype.slice.call

import './lodash.min.js';

var imagesElements = document.querySelectorAll('form img');

// Vytvori ArrayList z kolekcii nodes
// imagesElements = Array.from(imagesElements); toto je druha, jednoduchsia moznost
imagesElements = Array.prototype.slice.call(imagesElements);

/**
 * Increase score for concrete dude and save this new increased score to localstorage
 * @param imageElement: concrete dude element, on who we are currently working
 */
var increaseScoreForDude = function (imageElement) {
    // get key from score dude Vasho
    console.log(imageElement.alt);
    var dudeKey = getKeyFromDude(imageElement);

    // get score from localstorage
    var scoreAmount = getScore(imageElement);

    // set newScore to localstorage
    var newScoreAmount = scoreAmount + 1;
    setScore(imageElement, newScoreAmount);

    // UPDATE DOM element
    updateDude(imageElement);
};

var updateDude = function (dude) {
    var scoreElement = dude.nextElementSibling;
    scoreElement.textContent = getScore(dude);
};

var getScore = function (dude) {
    return +localStorage.getItem(getKeyFromDude(dude)) || 0;
};

var setScore = function (dude, score) {
    localStorage.setItem(getKeyFromDude(dude), score);
};

/**
 * Create key name for concrete dude by score + nameOfDude
 * @param dude: concrete dude element
 * @returns {string}: score + nameOfDude
 */
var getKeyFromDude = function (dude) {
    return "score" + _.capitalize(dude.alt);
};

var desaturateClassRemoveOrAdd = function (selectedPerson) {
    var otherImage = _.without(imagesElements, selectedPerson)[0];
    otherImage.classList.toggle("desaturate");
};

var guyHurtsAndUnhurt = function (eventsArray, selectedPerson) {
    eventsArray.forEach(function (eventItem) {
        selectedPerson.addEventListener(eventItem, function () {
            desaturateClassRemoveOrAdd(selectedPerson);
        });
    });
};

export var Bros = {
    dudes: imagesElements,
    increaseScoreForDude: increaseScoreForDude,
    updateDude: updateDude,
    guyHurtsAndUnhurt: guyHurtsAndUnhurt
}