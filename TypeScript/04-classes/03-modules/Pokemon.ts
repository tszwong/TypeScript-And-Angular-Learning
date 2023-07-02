export class Pokemon {
    // private _name: string;
    // private _type: string;

    // constructor(name: string, type: string) {
    //     this._name = name;
    //     this._type = type;
    // }

    // shortcut version
    constructor(private _name: string, private _type: string){}

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    get type(): string {
        return this._type;
    }
    set type(value: string) {
        this._type = value;
    }

}
