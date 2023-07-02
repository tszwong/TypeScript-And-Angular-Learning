"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(10, 15);
var myCircle = new Circle_1.Circle(5, 10, 20);
var myRectangle = new Rectangle_1.Rectangle(0, 0, 2, 5);
var myArray = [];
myArray.push(myShape);
myArray.push(myCircle);
myArray.push(myRectangle);
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var tempShape = myArray_1[_i];
    console.log(tempShape.getInfo());
}
