// Week 3 Homework 2 Classes //
// OOP: Classes
// Let's create shaped objects


// 2. Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
    // Write a function called rectangle_area that returns the area of the given object.
    // Write a function total_sides that returns the number of sides of the object.
// 3. Define a new class called Square with appropriate attributes and instantiate a few Square objects.
    // Write a function called square_area that returns the area of the given object.
    // Write a function total_sides that returns the number of sides of the object.


// Challenge 1 //
// 1. Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.

    // Write a function called circle_area that returns the area of the object. 
    // Write a function total_sides that returns the number of sides of the object.

// Circle Class //
class Circle {
    constructor(radius){
        this.name = 'circle';
        this.radius = radius;
    }

    circle_area(){
        return Math.PI * this.radius * this.radius;
    }

    total_sides() {
     return Infinity;   
    }
}
const newCircle = new Circle(6);
console.log(newCircle.circle_area());

// Rectangle Class //

class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.rectangle_area();
    }
    rectangle_area() {
        return this.height * this.width;
    }

    total_sides() {
        return 4;
    }
}

class Square {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    square_area() {
        return this.height * this.width;
    }

    total_sides() {
        return 4;
    }
}

let newRectangle = new Rectangle(2,6);
let square = new Square(4,4);

console.log(square.square_area());
console.log(newRectangle.total_sides());
