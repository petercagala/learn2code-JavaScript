// Set: Dame krasne vsetky duplicity prec
// let mySet = new Set([
//     'petite',
//     'ebony',
//     'ebony',
//     'scat'
// ]);
// Alebo vytvor Set po jednom
let mySet = new Set();
mySet.add('petite');
mySet.add('ebony');
mySet.add('ebony');
mySet.add('scat');

for (let val of mySet) {
    console.log(val);
}

let myArray = [
    'petite',
    'ebony',
    'ebony',
    'scat'
];

// Returns the new duplicate free array. s pouzitim lodash: _.uniq
let myArrayUniq = _.uniq(myArray);
console.log("Pouzitie lodash:")
for (let val of myArrayUniq) {
    console.log(val);
}

