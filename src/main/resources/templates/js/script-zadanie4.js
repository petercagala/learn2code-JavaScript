let formatNumberButton = document.getElementById("formatNumberButton");

formatNumberButton.addEventListener('click', function () {
    let elementForFormat = document.getElementById("inputNumber");
    console.log(elementForFormat.value);

    let numberForFormat = Number(discount(elementForFormat.value, 50));

    let resultedMoneyFormat = formatMoney(numberForFormat,2);
    console.log(resultedMoneyFormat);

    let formatNumberElement = document.getElementById("formatNumber");
    formatNumberElement.innerHTML = "";
    formatNumberElement.append(resultedMoneyFormat);
});


function discount(number, percentageDiscount) {
    var numberAfterDiscount = number - number * percentageDiscount * 0.01;

    return numberAfterDiscount;
}



function formatMoney(number, decPlaces) {
    decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces;

    var numberRound = Math.abs(Number(number) || 0).toFixed(decPlaces);
    var numberBothParts = numberRound.split(".");

    var numberFirstPart = numberBothParts[0];
    var numberSecondPart = numberBothParts[1];

    var numberFirstPartReverse = numberFirstPart.split("").reverse();
    var numberFirstPartReverseArray = [];

    var counter = 0;
    var string3charArray = [];
    numberFirstPartReverse.forEach(function (valueOfFirstPart) {
        counter++;
        // string3charArray.add(valueOfFirstPart);
        string3charArray.push(valueOfFirstPart);
        if (counter == 3) {
            numberFirstPartReverseArray.push(string3charArray);

            counter = 0;
            string3charArray = [];
        }
    });
    if (string3charArray.length != 0) {
        numberFirstPartReverseArray.push(string3charArray);
    }

    var numberFormatReverse = "";
    numberFirstPartReverseArray.forEach(function (reverseFirstPart1) {
        reverseFirstPart1.forEach(function (reverseFirstPart2) {
            numberFormatReverse = numberFormatReverse + reverseFirstPart2;
        });
        numberFormatReverse =  numberFormatReverse + " ";
    });

    var numberFormat = "";
    numberFormatReverse.split("").reverse().forEach(function (numformat) {
        numberFormat = numberFormat + numformat;
    });

    return numberFormat +
        "," +
        numberSecondPart +
         " €";
}

