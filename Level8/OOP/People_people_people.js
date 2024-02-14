//

// MY SOLUTION

class Person {
  constructor(firstName, lastName, age, gender) {
    firstName ? this.firstName = firstName : this.firstName = "John";
    lastName ? this.lastName = lastName : this.lastName = "Doe";
    age ? this.age = age : this.age = 0;
    gender ? this.gender = gender : this.gender = "Male";

  }

  sayFullName() {
    return `${this.firstName} ${this.lastName}`
  }

  static greetExtraTerrestrials(raceName) {
    this.raceName = raceName;
    return `Welcome to Planet Earth ${raceName}`
  }
}

// OTHER SOLUTIONS

class Person {
  // instead of using ternary statements, defaults can be assigned in the parameters)
  constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
    // Use Object.assign for this.{} using curly braces to iterate through the params
    Object.assign(this, { firstName, lastName, age, gender });
  }
  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}