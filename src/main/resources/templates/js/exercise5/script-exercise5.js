var inputNumbersListElement = document.getElementById("inputNumbersList");

var addNumberButtonElement = document.getElementById("addNumberButton");

var calculateButtonElement = document.getElementById("calculateButton");

var resultParagraphElement = document.getElementById("resultParagraph");

addNumberButtonElement.addEventListener("click", function addNumberButton(event) {
    console.log(event);

    var newLiElement = document.createElement("li");
    newLiElement.textContent = "Spočítaj číslo:";

    var newInputNumberElement = document.createElement("input");
    newInputNumberElement.type = "text";

    var htmlbrElement = document.createElement("br");

    newLiElement.appendChild(newInputNumberElement);

    inputNumbersListElement.appendChild(htmlbrElement);
    inputNumbersListElement.appendChild(htmlbrElement);
    inputNumbersListElement.appendChild(newLiElement);
});

calculateButtonElement.addEventListener("click", function calculateButton(event) {
    console.log(event);

    var inputNumbersList = inputNumbersListElement.querySelectorAll("li input");

    var sumOfInputValues = 0.0;
    inputNumbersList.forEach(function (inputElement) {
        sumOfInputValues = cutSumOfTwoNumbers(sumOfInputValues, parseFloat(inputElement.value));
    });
    resultParagraphElement.textContent = "Súčet všetkých vstupných čísel je " + sumOfInputValues;
});

function cutSumOfTwoNumbers(number1, number2) {
    return (number1*10 + number2*10) / 10;
}