'use strict';

(
    function test() {
        console.log(this); // // pri tomto 'use strict' rezime je this undefined
    } ()
)

var dudesList = DudesResource.dudes;

var rowsElement = document.getElementById("rows");

var numberOdDudes = 0;
var numberOfComments = 0;

dudesList.forEach(function (dude) {
    // nieco = 5; pri pouziti 'use strict' nastavenie globalnej premennej takto nepojde a vyhodi sa chyba

    var articleElement = document.createElement("article");

    var aElement = document.createElement("a");
    aElement.textContent = dude.who;
    aElement.href = "dude/" + dude.who;

    var h4Element = document.createElement("h4");
    h4Element.appendChild(aElement);

    var pElement = document.createElement("p");
    pElement.textContent = dude.wat;

    var footerElement = document.createElement("footer");
    footerElement.textContent = dude.comments;
    footerElement.className = "comments";

    articleElement.appendChild(h4Element);
    articleElement.appendChild(pElement);
    articleElement.appendChild(footerElement);

    rowsElement.appendChild(articleElement);
});

rowsElement.querySelectorAll("article").forEach(function (article) {
    numberOdDudes = numberOdDudes +1;

    let commentNumber = +article.getElementsByTagName("footer")[0].textContent;
    numberOfComments = numberOfComments + commentNumber;
});

let numberOfDudesElement = document.getElementById("numberOfDudes");
let numberOfCommentsElement = document.getElementById("numberOfComments");

numberOfDudesElement.textContent = numberOdDudes;
numberOfCommentsElement.textContent = numberOfComments;