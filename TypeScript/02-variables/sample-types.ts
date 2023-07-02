let pokemon_name: string = "Squirtle";
let type: string = "Water";
let owned: boolean = true;
let pokedex_id: number = 7;

console.log(owned);
console.log("We found in your pokedex #00" + pokedex_id);
console.log("You own " + type + " pokemon: " + pokemon_name);

// using template strings
console.log(`You own ${type} pokemom: ${pokemon_name}`);
