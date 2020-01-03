// var vashoImage = document.getElementById("vasho");

// querySelectorAll vytiahne nodeList, co nieje pole, takze musim pouzit kvoli
// starsim prehliadacom Array.prototype.slice.call
var imagesElements = document.querySelectorAll('form img');

// Vytvori ArrayList z kolekcii nodes
// imagesElements = Array.from(imagesElements); toto je druha, jednoduchsia moznost
imagesElements = Array.prototype.slice.call(imagesElements);

imagesElements.forEach(function (imageElement) {
    imageElement.addEventListener('click', function () {
        console.log(this);
        var scoreElement = this.nextElementSibling;
        var scoreAmount = Number(scoreElement.textContent);

        scoreAmount = scoreAmount + 1;

        console.log(scoreAmount);
        scoreElement.textContent = scoreAmount;
    });
});