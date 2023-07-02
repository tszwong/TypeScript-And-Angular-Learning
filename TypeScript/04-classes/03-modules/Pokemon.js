"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    // private _name: string;
    // private _type: string;
    // constructor(name: string, type: string) {
    //     this._name = name;
    //     this._type = type;
    // }
    // shortcut version
    constructor(_name, _type) {
        this._name = _name;
        this._type = _type;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
}
exports.Pokemon = Pokemon;
