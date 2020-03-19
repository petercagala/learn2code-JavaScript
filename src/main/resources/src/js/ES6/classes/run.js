let human1 = new Legend("Peter", "Cagala", 33);
let human2 = new Legend("Peter", "Kandrac", 20);
let human3 = new Legend("Katka", "Cagalova", 31);
let people = [];
people.push(human1, human2, human3);

people.map(human => {
    console.log(human.getRandomHit());
});

console.log("fullName: " + human1.fullName);
console.log("who is it: " + human1.who());