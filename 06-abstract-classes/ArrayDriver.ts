import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";

let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 2, 5);

let myArray: Shape[] = [];
myArray.push(myCircle);
myArray.push(myRectangle);

for (let tempShape of myArray) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea() + "\n");
}