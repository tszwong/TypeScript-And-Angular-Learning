var pokemon_name = "Squirtle";
var type = "Water";
var owned = true;
var pokedex_id = 7;
console.log(owned);
console.log("We found in your pokedex #00" + pokedex_id);
console.log("You own " + type + " pokemon: " + pokemon_name);
// using template strings
console.log("You own ".concat(type, " pokemom: ").concat(pokemon_name));
