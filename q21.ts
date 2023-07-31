    // Define an interface for the animal object
interface Animal {
    name: string;
    species: string;
    habitat: string;
    sound: string;
  }
  
  const lion: Animal = {
    name: "Lion",
    species: "Panthera leo",
    habitat: "Grasslands and savannas",
    sound: "Roar"
  };
  
  const dolphin: Animal = {
    name: "Dolphin",
    species: "Delphinidae",
    habitat: "Oceans",
    sound: "Clicks and whistles"
  };
  
  const eagle: Animal = {
    name: "Eagle",
    species: "Aquila",
    habitat: "Mountains and forests",
    sound: "Screech"
  };
  
  function printAnimalInfo(animal: Animal) {
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
  