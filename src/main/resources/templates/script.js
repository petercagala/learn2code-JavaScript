var browserList = document.getElementById("browser"),
    newItem1 = document.createElement('li');
;
newItem1.textContent = 'page loaded';
browserList.appendChild(newItem1);

let myButton = document.getElementById("myButtonId");
myButton.addEventListener('click',function clicked(event) {
    addListItemMessage("browser","klikol si na button")
});

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

document.body.addEventListener('keypress', function keyboarded(event) {
// document.body.addEventListener('keyup', function keyboarded(event) {
    console.log(event);

    var oldLeft = getComputedStyle(document.body).left,
        newLeft;
    // Urci vzdy, v akej desiatkovej sustave prave pracujes, defaultna je 10 tkova
    oldLeft = parseInt(oldLeft, 10);

    var oldUp = getComputedStyle(document.body).margin,
        newUp;
    oldUp = parseInt(oldUp, 10);

    // v starsich prehliadacoch sa pouziva event.keyCode
    if (event.key == "a") {
        addListItemMessage("user", event.key + " and go LEFT");
        newLeft = oldLeft - 10;
    } else if (event.key == "l"){
        addListItemMessage("user", event.key + " and go RIGHT");
        newLeft = oldLeft + 10;
    } else if (event.key = "y") {
        // addListItemMessage("user", event.key + " and go UP");
        newUp = oldUp - 10;
    } else if (event.key = "b") {
        // addListItemMessage("user", event.key + " and go DOWN");
        newUp = oldUp + 10;
    }
    else {
        addListItemMessage("user", event.key);
    }
    document.body.style.left = newLeft + "px";
    document.body.style.margin = newUp + " px";

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



