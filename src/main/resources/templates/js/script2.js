// var vashoImage = document.getElementById("vasho");

// querySelectorAll vytiahne nodeList, co nieje pole, takze musim pouzit kvoli
// starsim prehliadacom Array.prototype.slice.call
var imagesElements = document.querySelectorAll('form img');

// Vytvori ArrayList z kolekcii nodes
// imagesElements = Array.from(imagesElements); toto je druha, jednoduchsia moznost
imagesElements = Array.prototype.slice.call(imagesElements);


imagesElements.forEach(function (imageElement) {

    // load score from localstorage
    updateDude(imageElement);

    // increase score
    imageElement.addEventListener('click', function () {
        increaseScoreForDude(imageElement);
    });

    // Possible event types on image Element
    let eventsArray = ['mouseover', 'mouseout'];
    guyHurtsAndUnhurt(eventsArray, imageElement);
});

/**
 * Increase score for concrete dude and save this new increased score to localstorage
 * @param imageElement: concrete dude element, on who we are currently working
 */
function increaseScoreForDude(imageElement) {
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
}

function updateDude(dude) {
    var scoreElement = dude.nextElementSibling;
    scoreElement.textContent = getScore(dude);
}

function getScore(dude) {
    return +localStorage.getItem(getKeyFromDude(dude)) || 0;
}

function setScore(dude, score) {
    localStorage.setItem(getKeyFromDude(dude), score);
}

/**
 * Create key name for concrete dude by score + nameOfDude
 * @param dude: concrete dude element
 * @returns {string}: score + nameOfDude
 */
function getKeyFromDude(dude) {
    return "score" + _.capitalize(dude.alt); ;
}

function desaturateClassRemoveOrAdd(selectedPerson) {
    var otherImage = _.without(imagesElements, selectedPerson)[0];
    otherImage.classList.toggle("desaturate");
}

function guyHurtsAndUnhurt(eventsArray, selectedPerson) {
    eventsArray.forEach(function (eventItem) {
        selectedPerson.addEventListener(eventItem, function () {
            desaturateClassRemoveOrAdd(selectedPerson);
        });
    });
}


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