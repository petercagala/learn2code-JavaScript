// var vashoImage = document.getElementById("vasho");

// querySelectorAll vytiahne nodeList, co nieje pole, takze musim pouzit kvoli
// starsim prehliadacom Array.prototype.slice.call
var imagesElements = document.querySelectorAll('form img');

// Vytvori ArrayList z kolekcii nodes
// imagesElements = Array.from(imagesElements); toto je druha, jednoduchsia moznost
imagesElements = Array.prototype.slice.call(imagesElements);

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
    imageElement.addEventListener('mouseover', function mouseoverEvent() {
        // https://lodash.com/docs/4.17.15#without
        // _.without(array, [values])
        // Creates an array excluding all given values using SameValueZero for equality comparisons.
        // array (Array): The array to inspect.
        // [values] (...*): The values to exclude.
        var otherImage = _.without(imagesElements, this)[0];

        otherImage.classList.add('desaturate');
    });

    // mouse leaves
    imageElement.addEventListener('mouseout', function mouseoutEvent() {
        var otherImage = _.without(imagesElements, this)[0];

        otherImage.classList.remove('desaturate');
    });
});