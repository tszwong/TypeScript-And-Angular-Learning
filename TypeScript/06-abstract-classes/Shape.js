"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    // defining fields and constructor
    function Shape(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Shape.prototype, "x_1", {
        // getters and setters
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.getInfo = function () {
        return "x: ".concat(this.x_1, ", y: ").concat(this.y);
    };
    return Shape;
}());
exports.Shape = Shape;
