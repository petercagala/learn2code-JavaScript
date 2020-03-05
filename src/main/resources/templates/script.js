// Toto onrejectionhandled fajnovy prodavok do feature/5-2
var browserList = document.getElementById("browser"),
    newItem1 = document.createElement('li');
;
newItem1.textContent = 'page loaded';
browserList.appendChild(newItem1);

let myButton = document.getElementById("myButtonId");
myButton.addEventListener('click',function clicked() {
    addListItemMessage("browser","klikol si na button")
});

document.body.addEventListener('keyup', function keyboarded() {
    addListItemMessage("user", "stlacil si tlacitko na klavesnici")
});

function addListItemMessage(idElement, message) {
    console.log(event);
    let userList = document.getElementById(idElement),
        userListItem = document.createElement('li');

    userListItem.textContent = message;

    userList.appendChild(userListItem);
}



