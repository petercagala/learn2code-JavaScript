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

