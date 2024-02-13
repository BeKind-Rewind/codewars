// Classy Classes
// Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

// Task
// Your task is to complete this Class, 
// the Person class has been created. 
// 1. You must fill in the Constructor method to accept a name as string and an age as number, 
// 2. complete the get Info property and getInfo method/Info getter which should return johns age is 34

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

// GIVEN

class Person {
  constructor(name, age) {

  }

}


// SOLUTION 1 - this passed the tests, doesn't solve all the requirements though

class Person {
  constructor(name, age) { // #1
    this.name = String(name);
    this.age = Number(age);
    this.info = name + 's age is ' + age; // #2 - kind of
  }

}

// SOLUTION 2

class Person {
  constructor(name, age) { // #1
    this.name = name;
    this.age = age;
  }

  get info() { // #2
    return `${this.name}s age is ${age}`;
  }
}

