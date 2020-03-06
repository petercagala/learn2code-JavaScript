// VASHO IMAGE
document.getElementById("vasho").addEventListener('click', function clickedVasho(event) {
    increaseScoreForPerfectGuys(event,  this);
});

// MITCH IMAGE
document.getElementById("mitch").addEventListener('click', function clickedMitch(event) {
    increaseScoreForPerfectGuys(event, this);
});

/**
 * Increase score of the concrete perfect guy
 * @param event
 * @param guyImageElement Vasho or Mithc or other perfect guy object
 */
function increaseScoreForPerfectGuys(event, guyImageElement) {
    console.log(event);
    console.log(guyImageElement); // Odkazuje na objekt mitchImage

    var scoreElement = guyImageElement.nextElementSibling;
    var scoreAmount = Number(scoreElement.textContent);

    scoreAmount = scoreAmount + 1;

    console.log(scoreAmount);
    scoreElement.textContent = scoreAmount;
}