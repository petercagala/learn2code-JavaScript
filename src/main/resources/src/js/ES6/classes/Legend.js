class Legend extends Human {

    // constructor(firstName, lastName, age) {
    //     super(firstName, lastName, age);
    // }

    constructor(...args) {
        super(...args);
        this.hits = [
            "Voňavky dievčat",
            "Kamarátka nádej",
            "Tri štvrte na jeseň",
            "Chlapčenský úsmev"
        ];
    }

    getRandomHit() {
        // Toto je nejaka haluz, ako zostat v rozmadzi length of the array
        let randomHit = Legend.randomItem(this.hits);
        randomHit = randomHit.toUpperCase();

        return super.who() + `\nAnd he just wrote ${randomHit}`;
    }

    static randomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
}