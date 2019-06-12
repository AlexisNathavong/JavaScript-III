/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - is like an art museum and we aren't sure which piece of art we are pointing at. Therefore we just point to the art museum.
* 2. Implicit Binding - (Automatic) it automatically points to an object and methods.
* 3. 
* 4. Explicit Binding - this is similar to Implicit, but with functions instead.
*
* write out a code example of each explanation above
*/

// Principle 1

/* code example for Window Binding*/
function hello(name) {
    return `Hello ${this.name}`;
}

console.log(hello());

// Principle 2

/*code example for Implicit Binding*/
const dog = {
    name: "Harley",
    age: 0.3,
    command: "rollover",
    trick: function() {
        return `${this.name} knows this trick, ${this.command}`; 
    }

}

console.log(dog.trick());

// Principle 3

/*code example for New Binding*/
function Parent(attributes) {
    this.newName = attributes.name;
    this.newPhrase = attributes.phrase;
    this.newColor = attributes.name;
    this.speak = function() {
        return `${this.newName} says ${this.newPhrase}`;
    }
    console.log(this);
}

const alexis = new Parent( {
    name: "Alexis",
    phrase: "Hi, how are you?",
    color: "blue",
});

const jimmy = new Parent( {
    name: "Jimmy",
    phrase: "Hello, have a great day!",
    color: "red",
});


// Principle 4

/*code example for Explicit Binding*/
const person = {
    "name" : "Alexis"
}

function introduction(eat, program, sleep) {
    return `Hello, this is ${this.name} and she likes to: ${eat}, ${program}, and ${sleep}. Be like ${this.name}.`;
}

console.log(introduction.call(person,"Eat","Program","Sleep"));