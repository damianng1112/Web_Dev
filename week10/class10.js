const invoice = {
    subtotal: 100, //property
    taxRate: 0.10, // property

    getTotal: function() { // method
        const salesTax = this.subtotal * this.taxRate;
        // this = the object
        return this.subtotal + salesTax;
    }
};
console.log(invoice.taxRate); // displays 0.1
console.log(invoice.getTotal()); // displays 110

//Circle object
const circle = {
    radius: 5,
    color: "blue",

    getDiameter: function() {
        const diameter = this.radius * 2;
        return diameter;
    },

    getArea: function(){
        const area = Math.PI * Math.pow(this.radius, 2);
        return area;
    },

    toString: function(){
        return "Radius: "+this.radius
                +"\nColor: "+circle.color
                +"\nDiameter: "+circle.getDiameter()
                +"\nArea: "+circle.getArea()
    }
};



console.log("Radius: "+circle.radius)
console.log("Color: "+circle.color)
console.log("Diameter: "+circle.getDiameter())
console.log("Area: "+circle.getArea())
console.log(circle.toString())

const student = {
    id: 290501,
    name: "Damian",
    address: "Willow Park",
    grades: [60, 70, 80, 90],

    addGrade: function(){
        let total = 0;
        let arraylength = this.grades.length;
        for (var i = 0; i < arraylength; i++){
            total += this.grades[i];
        };
        return total;
    },
};

console.log(student.addGrade())

//Circle object
function Circle(radius, color) {
    this.radius = radius;
    this.color = color;
    
}

Circle.prototype.getDiameter = function(){
    return this.radius * 2;
}

Circle.prototype.getArea = function(){
    return Math.PI * Math.pow(this.radius, 2);
}

Circle.prototype.toString = function(){
    return `Radius: ${this.radius}
            \n Color: ${this.color}
            \n Diameter: ${this.getDiameter()}
            \n Area: ${this.getArea()}`;
}

const c1 = new Circle(10, "purple");
console.log(c1.toString());