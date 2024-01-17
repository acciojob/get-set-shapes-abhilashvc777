// Base class Rectangle
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    // Getter for width
    get width() {
        return this._width;
    }

    // Getter for height
    get height() {
        return this._height;
    }

    // Method to calculate and return the area of the rectangle
    getArea() {
        return this._width * this._height;
    }
}

// Subclass Square extending Rectangle
class Square extends Rectangle {
    constructor(side) {
        // Call the constructor of the parent class (Rectangle)
        super(side, side);
    }

    // Method specific to Square to calculate and return the perimeter
    getPerimeter() {
        return 4 * this.width;
    }
}

// Example usage
const rectangle = new Rectangle(5, 8);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 8
console.log(rectangle.getArea()); // Output: 40

const square = new Square(4);
console.log(square.width); // Output: 4
console.log(square.height); // Output: 4
console.log(square.getArea()); // Output: 16
console.log(square.getPerimeter()); // Output: 16

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
