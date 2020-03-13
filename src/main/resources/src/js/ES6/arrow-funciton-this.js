function Fraud() {
    this.name = "Peter Cagala";
    this.disease = "diabetes";
    this.health = 20;

    // var self = this;

    console.log("Prvy prechod funkciou Fraud");

    // setInterval(function fade() {
    //     self.health--;
    //     console.log("Aktualny objekt s zivotom je:" + self.health + ".....-> " +self.disease);
    // }, 1000)

    setInterval(() => {
        this.health--;
        console.log("Aktualny objekt s zivotom je:" + this.health + ".....-> " +this.disease);
    }, 1000)
}

var fraud1 = new Fraud();