// * function, which create an iterator
function * iteratorGenetator() {
    yield "Peter";
    yield "Katka";
    yield "Milan";
}

let iterableVariable = iteratorGenetator();

/**
 * for...of loop
 */
for (let variable of iterableVariable) {
    console.log(variable);
}

/**
 * Hviezdicka je krasny generator
 * @returns {Generator<number, void, ?>}
 */
function * generatorId() {
    let id = 0;
    while(true) {
        // pri generatoroch sa nemusis bat, pretorze akonahle narazi na prvy yield, zastavi svoch chod a caka na dalsi next()
        if (id == 5) {
            break;
        } else {
            yield ++id; // tuna to vzdy zastavi
        }
    }

}