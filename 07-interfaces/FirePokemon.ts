import { Pokemon } from "./Pokemon";

export class FirePokemon implements Pokemon {
    getDailyPokemon(): string {
        return "You get a Charmander!"
    }
    
}