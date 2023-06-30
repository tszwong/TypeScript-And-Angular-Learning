import { Pokemon } from "./Pokemon";

// create a new instance now with the constructor added
let myPokemon = new Pokemon("Squirtle", "Water");

// printing the fields of the Pokemon object using getters
console.log(`Pokemon Name: ${myPokemon.name}\nType: ${myPokemon.type}`);

myPokemon.name = "Charmander";
myPokemon.type = "Fire";
console.log(`Pokemon Name: ${myPokemon.name}\nType: ${myPokemon.type}`);
