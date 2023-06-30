 let pokemons: string[] = ["squirtle","bulbasaur","ivysaur","venusaur","charmander","charmeleon",];
 
 // using index
 for (let i = 0; i < pokemons.length; i++) {
    console.log(pokemons[i]);
 }

 // simplifief version
 for (let pokemon of pokemons) {
    console.log(pokemon);
 }