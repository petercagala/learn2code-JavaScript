var browserList = document.getElementById("browser"),
    newItem1 = document.createElement('li');
;
newItem1.textContent = 'page loaded';
browserList.appendChild(newItem1);

let myButton = document.getElementById("myButtonId");
myButton.addEventListener('click',function clicked(event) {
    addListItemMessage("browser","klikol si na button")
});

document.getElementById("numberComparisonButtonId").addEventListener('click',function () {
    let numberComparisonParagraph = document.getElementById("numberComparisonParagraphId");
    numberComparisonParagraph.innerHTML = "";
    // higherNumber(firstNumber, secondNumber)
    var firstNumber = parseFloat(document.getElementById("firstNumber").valueOf().value);
    var secondNumber = parseFloat(document.getElementById("secondNumber").valueOf().value);
    var thirdNumber = parseFloat(document.getElementById("thirdNumber").valueOf().value);

    var valuesForComparison = [];
    valuesForComparison.push(firstNumber,secondNumber,thirdNumber)
    numberComparisonParagraph.append("Najvacsie cislo je " + higherNumber(valuesForComparison));
})

document.getElementById("computeId").addEventListener("click", function computeFunction(event) {
    // var numberOfItems = 5;
    var numberOfItems = document.getElementById("numberOfItems").value
    var itemPrice = document.getElementById("itemPrice").value;
    let computeParagraph = document.getElementById("computeParagraph");
    computeParagraph.innerHTML = "";

    var resultPrice = computePrice(numberOfItems, itemPrice);

    console.log(resultPrice);
    computeParagraph.append("Kupil si "+ numberOfItems + " predmetov za " + resultPrice + " eur dokopy!!!");
})
var pressedKeys = {};
document.body.addEventListener('keyup', function (event) {
    pressedKeys[event.key] = false;
})

document.body.addEventListener('keypress', function keyboarded(event) {
// document.body.addEventListener('keyup', function keyboarded(event) {
    console.log(event);

    pressedKeys[event.key] = true;

    var oldLeft = getComputedStyle(document.body).left,
        newLeft;
    // Urci vzdy, v akej desiatkovej sustave prave pracujes, defaultna je 10 tkova
    oldLeft = parseInt(oldLeft, 10);

    var oldTop = getComputedStyle(document.body).top,
        newTop;
    oldTop = parseInt(oldTop, 10);

    // v starsich prehliadacoch sa pouziva event.keyCode
    if (pressedKeys['a']) {
        newLeft = oldLeft - 10;
    } else if (pressedKeys['l']){
        newLeft = oldLeft + 10;
    } else if (pressedKeys['y']) {
        // addListItemMessage("user", event.key + " and go UP");
        newTop = oldTop - 10;
    } else if (pressedKeys['b']) {
        // addListItemMessage("user", event.key + " and go DOWN");
        newTop = oldTop + 10;
    } else if (pressedKeys['y'] && pressedKeys['l']) {
        newTop = oldTop - 10;
        newLeft = oldLeft + 10;
    } else {
        addListItemMessage("user", event.key);
    }
    document.body.style.left = newLeft + "px";
    document.body.style.top = newTop + "px";

});

window.addEventListener('beforeunload', function (event) {
    addListItemMessage('browser', "don't try to close me");

    event.returnValue = 'Do you want to close this window?';
    console.log(event);
})

function computePrice(numberOfItems, itemPrice) {
    return numberOfItems * itemPrice;
}

function addListItemMessage(idElement, message) {
    let userList = document.getElementById(idElement),
        userListItem = document.createElement('li');

    userListItem.textContent = message;

    userList.appendChild(userListItem);
}

function higherNumber(valuesForComparison) {
    // The new spread operator is a shorter way of writing the apply solution to get the maximum of an array:
    //     var arr = [1, 2, 3];
    // var max = Math.max(...arr);
    var highestNumber = Math.max(...valuesForComparison);
    return highestNumber;
}



