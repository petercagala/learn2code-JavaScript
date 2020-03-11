function multiMax(firstNumber, ...theRestNumbers) {
    // Pozor ako return treba dat (b - a) teda cislo ani boolean b > a
    let sortedTheRestNumbers = theRestNumbers.sort((a,b) => (b - a));

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

console.log(
    "toto je prvy console log: ",
    multiMax(5,2,1,2,16,3)
);