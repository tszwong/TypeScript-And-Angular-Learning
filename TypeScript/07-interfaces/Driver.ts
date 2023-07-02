import { FirePokemon } from "./FirePokemon";
import { Pokemon } from "./Pokemon";
import { WaterPokemon } from "./WaterPokemon";

let myWaterPokemon = new WaterPokemon();
let myFirePokemon = new FirePokemon();

// declare an array for pokemons
let pokemons: Pokemon[] = [];
// add the pokemons to the array
pokemons.push(myWaterPokemon);
pokemons.push(myFirePokemon);

for (let tempPokemon of pokemons) {
    console.log(tempPokemon.getDailyPokemon());
}