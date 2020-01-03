var browserList = document.getElementById("browser"),
    newItem1 = document.createElement('li');
;
newItem1.textContent = 'page loaded';
browserList.appendChild(newItem1);

let myButton = document.getElementById("myButtonId");
myButton.addEventListener('click',function clicked(event) {
    addListItemMessage("browser","klikol si na button")
});

document.body.addEventListener('keyup', function keyboarded(event) {
    console.log(event);
    addListItemMessage("user", "stlacil si tlacitko na klavesnici")
});

window.addEventListener('beforeunload', function (event) {
    addListItemMessage('browser', "don't try to close me");

    event.returnValue = 'Do you want to close this window?';
    console.log(event);
})

function addListItemMessage(idElement, message) {
    let userList = document.getElementById(idElement),
        userListItem = document.createElement('li');

    userListItem.textContent = message;

    userList.appendChild(userListItem);
}



