'use strict';

const TAX = 0.2;

/**
 *
 */
class SexyNumbers {

    // Moze to byt kludne aj static
    static multiMax(firstNumber, ...theRestNumbers) {
        // Pozor ako return treba dat (b - a) teda cislo ani boolean b > a
        let sortedTheRestNumbers = theRestNumbers.sort((a, b) => (b - a));

        // let sortedTheRestNumbers = theRestNumbers.sort(
        //     function sortMe(a, b) {
        //         return b - a;
        //     }
        // );

        let maxValue = sortedTheRestNumbers[0];

        console.log("funkcia multiMax:");
        console.log(sortedTheRestNumbers, maxValue);

        return firstNumber * maxValue;
    }
}

/**
 *
 */
class SexyNumbersExtended extends SexyNumbers {

    /**
     * Ja mozem priamo parametru prednastavit percent = 10, ak tomuto parametru nic neposlem
     *
     * Kludne mozem hodnotu nezadaneho parametra dostat aj volanim inej funkcie, alebo metody
     * @param price
     * @param percent
     * @returns {string}
     */
    static discount(price, percent = 10, tax = getTax()) {
        let newPrice = price - price * percent * 0.01;
        newPrice = newPrice - newPrice * tax;
        return newPrice.toFixed(2);
    }

}

function getTax() {
    return TAX;
}

console.log(
    SexyNumbers.multiMax(5, 2, 1, 2, 16, 3)
);

console.log(
    SexyNumbersExtended.discount(100, 20)
)