class Pokemon {
    // private _name: string;
    // private _type: string;

    // constructor(name: string, type: string) {
    //     this._name = name;
    //     this._type = type;
    // }

    // shortcut version
    constructor(private _name: string, private _type: string){}

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }

}

// create a new instance of Pokemon
// let myPokemon = new Pokemon();
// myPokemon.name = "Bulbasaur";
// myPokemon.type = "Grass";

// create a new instance now with the constructor added
let myPokemon = new Pokemon("Squirtle", "Water");

// console.log(myPokemon.name);
// console.log(myPokemon.type);

// printing the fields of the Pokemon object using getters
console.log(`Pokemon Name: ${myPokemon.name}\nType: ${myPokemon.type}`);

myPokemon.name = "Charmander";
myPokemon.type = "Fire";
console.log(`Pokemon Name: ${myPokemon.name}\nType: ${myPokemon.type}`);