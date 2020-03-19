class Human {

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    who() {
        if (this.age === 33) {
            return this.fullName + " is " + this.age + " years old!!! , like Jezis Kristus, nas spasitel sveta. Boze prosim ta, pomoz mi " +
                "naucit sa raz programovat a zachran nas prosim od tohoto strasneho Korona virusu.!!!";
        }
        return this.fullName + " is " + this.age + " years old!!!";
    }
}