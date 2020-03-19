/**
 * Musi tam to get pred metodou byt, lebo inak by sa to zobrazilo takto ako funkcia:
 * Cize ked dam pred metodu get, mozem k nej pristupovat ako k atributu, teda bez zatvoriek
 * legend.fullName
 ƒ fullName() {
        return this.fistName + " " + this.lastName;
    }
 * @type {{lastName: string, fistName: string, readonly fullName: string}}
 */
let legend = {
    _fistName: "peter",
    _lastName: "cagala",
    _age: 31,

    get firstName() {
        return this._fistName.charAt(0).toUpperCase() + this._fistName.slice(1);
    },

    get lastName() {
        return this._lastName.charAt(0).toUpperCase() + this._lastName.slice(1);
    },

    get fullName() {
        return this.firstName + " " + this.lastName;
    },

    get age() {
        return this._age;
    },

    /**
     * Pozor, kedze si tam dal set, nemozes to zapisat ako legend.age(34), ale ako legend.age = 34
     * @param age
     */
    set age(age) {
        if (!Number.isInteger(age)) {
            return console.error("This is not a number", age);
        }
        this._age = age;
    }
};

console.log(legend.fullName);

