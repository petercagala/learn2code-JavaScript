var browserList = document.getElementById("browser"),
    newItem1 = document.createElement('li');
    newItem2 = document.createElement('li');
;
newItem1.textContent = 'page loaded 1';
newItem2.textContent = 'page loaded 2';
browserList.appendChild(newItem1);
browserList.appendChild(newItem2);

let myButton1 = document.getElementById("myButtonId1");
let myButton2 = document.getElementById("myButtonId2");
myButton1.addEventListener('click',function () {
    addListItemMessage("browser","klikol si na button 1")
});
myButton2.addEventListener("click", function () {
    addListItemMessage("browser", "klikol si na button 2")
});

document.body.addEventListener('keyup', function () {
    addListItemMessage("user", "stlacil si tlacitko na klavesnici")
});

function addListItemMessage(idElement, message) {
    console.log(event);
    let userList = document.getElementById(idElement),
        userListItem = document.createElement('li');

    userListItem.textContent = message;

    userList.appendChild(userListItem);
}



