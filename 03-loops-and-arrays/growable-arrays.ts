let pokemonsTwo: string[] = ["squirtle","Charmander","Bulbasaur"];
pokemonsTwo.push("Pikachu");
pokemonsTwo.push("Mew");

for (let i = 0; i < 5; i++) {
    console.log(pokemonsTwo);
    pokemonsTwo.pop();
}