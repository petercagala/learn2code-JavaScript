// var vashoImage = document.getElementById("vasho");

// querySelectorAll vytiahne nodeList, co nieje pole, takze musim pouzit kvoli
// starsim prehliadacom Array.prototype.slice.call
var imagesElements = document.querySelectorAll('form img');

// Vytvori ArrayList z kolekcii nodes
// imagesElements = Array.from(imagesElements); toto je druha, jednoduchsia moznost
imagesElements = Array.prototype.slice.call(imagesElements);

document.getElementsByTagName("h2")[0].addEventListener('click', function () {
    var scoreNumber = localStorage.getItem("scoreNumber") ;
    if (scoreNumber == null) {
        scoreNumber = 0;
    } else {
        scoreNumber = +localStorage.getItem("scoreNumber");
    }

    scoreNumber++;
    localStorage.setItem("scoreNumber", scoreNumber);
})

imagesElements.forEach(function (imageElement) {
    // increase score
    imageElement.addEventListener('click', function () {
        console.log(this);
        var scoreElement = this.nextElementSibling;
        var scoreAmount = Number(scoreElement.textContent);

        scoreAmount = scoreAmount + 1;

        console.log(scoreAmount);
        scoreElement.textContent = scoreAmount;
    });

    // mouse enters, the other guy hurts
    imageElement.addEventListener('mouseover', function () {
        var otherImage = _.without(imagesElements, this)[0];

        otherImage.classList.add('desaturate');
    });

    // mouse leaves
    imageElement.addEventListener('mouseout', function () {
        var otherImage = _.without(imagesElements, this)[0];

        otherImage.classList.remove('desaturate');
    });
});