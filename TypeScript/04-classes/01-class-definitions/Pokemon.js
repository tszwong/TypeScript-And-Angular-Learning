var Pokemon = /** @class */ (function () {
    function Pokemon(name, type) {
        this._name = name;
        this._type = type;
    }
    Object.defineProperty(Pokemon.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pokemon.prototype, "getType", {
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pokemon.prototype, "setName", {
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pokemon.prototype, "setType", {
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    return Pokemon;
}());
// create a new instance of Pokemon
// let myPokemon = new Pokemon();
// myPokemon.name = "Bulbasaur";
// myPokemon.type = "Grass";
// create a new instance now with the constructor added
var myPokemon = new Pokemon("Squirtle", "Water");
// console.log(myPokemon.name);
// console.log(myPokemon.type);
// printing the fields of the Pokemon object using getters
console.log(myPokemon.getName);
console.log(myPokemon.getType);
