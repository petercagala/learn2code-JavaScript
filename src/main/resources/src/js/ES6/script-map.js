let logo = document.getElementById("rows");
let fake = document.getElementById("overview");

    // Kluce mozu byt kludne html elementy, hocijake objekty
let myMap = new Map();
myMap.set(logo, {
    isMoving: false,
    nice: true
});

myMap.set(fake, {
    isMoving: true
});

// Mapa je krasne iterovatelna
for (let val of myMap ) {
    // Kluc
    console.log("Kluc: ");
    console.log(val[0]);

    // value
    console.log("Hodnota: ");
    console.log(val[1]);
}

/**
 * Len kluce tejto mapy
 */
for (let val of myMap.keys()) {
    console.log("Toto je len kluc tejto mapy:")
    console.log(val);
}