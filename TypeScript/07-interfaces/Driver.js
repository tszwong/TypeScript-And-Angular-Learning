"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FirePokemon_1 = require("./FirePokemon");
const WaterPokemon_1 = require("./WaterPokemon");
let myWaterPokemon = new WaterPokemon_1.WaterPokemon();
let myFirePokemon = new FirePokemon_1.FirePokemon();
// declare an array for pokemons
let pokemons = [];
// add the pokemons to the array
pokemons.push(myWaterPokemon);
pokemons.push(myFirePokemon);
for (let tempPokemon of pokemons) {
    console.log(tempPokemon.getDailyPokemon());
}
