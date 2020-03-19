let mario = {
    name: "MArion Andel",
    health: 3,

    jump() {
        console.log("dal som jump");
    }

};

/**
 * spy je proxy objekt na maria. Ta funkcia funguje, iba ked zapisujem, alebo citam maria z proxy objektu spy
 * 1. Objekt, ktory idem spionovat
 * 2. Objekt, ktory definuje, ze ak sa nieco stane, tak sa ma spustit funkcia
 *
 * // Pasce ktore viem nastrazit v proxy objekte:
 * GET
 * SET
 * APPLY    zachyti zavolanie funkcie
 * @type {{name: string, health: number, jump(): void}}
 */
let marioSpy = new Proxy(mario, {
        /**
         * GET je ako keby vseobecny getter pre vsetky atributy objektu mario
         * get: ak niekto pristupi k mariovej vlastnosti (name, health), tak chcem spustit function
         * target: objekt, ku ktoreho vlastnosti sme sa pokusili pristupit
         * name: nazov vlastnosti, ktoru ideme menit
         */
        get: function (target, name) {
            console.log(`reading ${name}`);
            return target[name];
        },
        /**
         * SET je veobecny SETTER pre vsetky atributy objektu mario
         *set: ked sa niekto pokusi ulozit nejaku hodnotu do objektu mario
         * @param target
         * @param name
         * * @param value hodnota, ktoru sa znazime zapisat
         */
        set: function (target, name, value) {
            console.log(`writing ${name} to ${value}`);
            if (name === "health") {
                if (!Number.isInteger(value)) {
                    return console.error("Health is not a number");
                }
            } else if (name === "name") {
                if (value.length > 10) {
                    console.error("Name is too long");
                }
            }
            return target[name] = value;
        }
    }
);