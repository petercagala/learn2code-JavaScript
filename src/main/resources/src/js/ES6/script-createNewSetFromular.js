let inputElement = document.querySelector("input");
let buttonElement = document.querySelector("button");

var tags = new Set();
buttonElement.addEventListener("click", function clickOnButton() {
    tags.add(inputElement.value);
    console.clear();
    tags.forEach(value => console.log(value));
});