let symbol1 = Symbol('Peter');
let symbol2 = Symbol('Peter');

symbol1 === symbol2; // false, pretoze porovnavame 2 uplne rozdielne objekty

let obj = {
    name: "vasho",
    how: "sexi"
};

console.log(typeof obj); // Object
console.log(typeof symbol1); // Symbol

/**
 * for in cyklus. Budeme prechadzat cez kluce(atributy) objektum teda:
 * name
 * how
 */
for (let key in obj) {
    console.log(key);
    // akeho je typu
    console.log(typeof key);
}

// Odkaz na 1 objekt
let how = Symbol("how 1");
// Tento odkaz na prvy objekt vkladame do obj
obj[how] = "this is how1";

// do premennej how vkladame odkaz na druhy unikatny objekt
how = Symbol("how 2");
// Do obj vkladame odkaz na druhy unikatny objekt
// !!!!!!!!! Toto je cela pointa, ze sa vlozi novy key how, ktory nebude prepisovat ten prvy
obj[how] = "this is how2";

// Pozeraj, tie Symbol objekty sa ti neukazu, zostanu skryte pred svetom
console.log("Ideme cez uplne cely objekt obj");
for (let i in obj) {
    console.log(i);
}

let email1 = Symbol("Peter Cagala");
obj[email1] = "petercagala@gmail.com";

// Opat ani email nevidime, zostava skryty. Ale vieme ho vytiahnut cez obj[email1]
// {name: "vasho", how: "sexi", Symbol(how 1): "this is how1", Symbol(how 2): "this is how2", Symbol(Peter Cagala): "petercagala@gmail.com"}
console.log("Ideme opat aj emailom cez uplne cely objekt obj");
for (let i in obj) {
    console.log(i);
}

// Dokonca aj ked vyrobim json z tohoto objektu, tak Symbol objekty nevidim
// {"name":"vasho","how":"sexi"}
let jsonShow = JSON.stringify(obj);
console.log(jsonShow);

// vsetko bez Symbols
console.log("getOwnPropertyNames:" + Object.getOwnPropertyNames(obj));

// len symbols
console.log("getOwnPropertySymbols:" + JSON.stringify(Object.getOwnPropertySymbols(obj)));

// uplne vsetky kluce, aj Symbols
console.log("vsetky keys:" + JSON.stringify(Reflect.ownKeys(obj)));

// vytvory String JSON, bez Symbols
console.log("JSON:" + JSON.stringify(obj));


