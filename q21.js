"use strict";
const lion = {
    name: "Lion",
    species: "Panthera leo",
    habitat: "Grasslands and savannas",
    sound: "Roar"
};
const dolphin = {
    name: "Dolphin",
    species: "Delphinidae",
    habitat: "Oceans",
    sound: "Clicks and whistles"
};
const eagle = {
    name: "Eagle",
    species: "Aquila",
    habitat: "Mountains and forests",
    sound: "Screech"
};
function printAnimalInfo(animal) {
    console.log("Animal Name:", animal.name);
    console.log("Species:", animal.species);
    console.log("Habitat:", animal.habitat);
    console.log("Sound:", animal.sound);
    console.log();
}
// Print information about each animal object
console.log("Animal Information:");
printAnimalInfo(lion);
printAnimalInfo(dolphin);
printAnimalInfo(eagle);
