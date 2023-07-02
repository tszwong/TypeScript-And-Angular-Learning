export abstract class Shape {
    // defining fields and constructor
    constructor(private _x: number, private _y: number) {}
    
    // getters and setters
    public get x_1(): number {
        return this._x;
    }
    public set x_1(value: number) {
        this._x = value;
    }
    public get y(): number {
        return this._y;
    }
    public set y(value: number) {
        this._y = value;
    }

    getInfo(): string {
        return `x: ${this.x_1}, y: ${this.y}`;
    }

    abstract calculateArea(): number;
}