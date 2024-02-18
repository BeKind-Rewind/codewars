// Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

// snoopy.bark(); // return "Woof"
// scoobydoo.bark(); // undefined
// Use method prototypes to enable all Dogs to bark.

// FUNDAMENTALSOBJECT-ORIENTED PROGRAMMING

// GIVEN

function Dog(breed) {
  this.breed = breed;
}

let snoopy = new Dog('Beagle');

let scoobydoo = new Dog('Great Dane');

// SOLUTION 1 - it WORKS but is not best practice because it creates a new method each instance, takes more memory, no inheritance utilized

function Dog(breed) {
  this.breed = breed;
  this.bark = function () { return "Woof" }
}

// let snoopy = new Dog('Beagle');

// let scoobydoo = new Dog('Great Dane');

// SOLUTION 2

class Dog {
  constructor() {
    this.breed = breed;
  }

  bark() {
    return "Woof"
  }
}

// let snoopy = new Dog('Beagle');
// let scoobydoo = new Dog('Great Dane');



// SOLUTION 3 - the best solution because of prototype method is what was called for
function Dog(breed) {
  this.breed = breed;
}

Dog.prototype.bark = function () {
  return "Woof";
}

// let snoopy = new Dog('Beagle');
// let scoobydoo = new Dog('Great Dane');