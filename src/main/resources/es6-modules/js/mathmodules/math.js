// Moze byt export priamo pri definovanej premennej, alebo aj v
// jednom skupinovom exporte
export
let theGoodNumber = 69;

export
function doMath(...rest) {
    // suma vsetkych hodnot, ktore vosli do tohoto pola
    return rest.reduce(((previousValue, currentValue) => previousValue + currentValue));
 }

 // export {
 //    theGoodNumber,
 //     doMath
 // }

/**
 * default sa pouziva, ak chcem zo suboru exportovat iba
 * jednu jedinu vec
 */
export default class Mario {
    static jump() {
        console.log("jumpa!!!");
    }
}