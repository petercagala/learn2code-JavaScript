var vashoImage = document.getElementById("vasho");

vashoImage.addEventListener('click', function clickedVasho(event) {
    console.log(event);
    console.log(this); // this sa odkazuje na objekt -> vashoImage

    var scoreElement = this.nextElementSibling;
    var scoreAmount = Number(scoreElement.textContent);

    scoreAmount = scoreAmount + 1;

    console.log(scoreAmount);
    scoreElement.textContent = scoreAmount;
})