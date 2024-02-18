// VVhat ?!?

// None of zese codevarriors seemz to remember hiz ovvn name !

// Kould you help ?

// var albert = new Warrior("Al")
// var boris  = new Warrior("Boris")

// albert.toString() --> "Hi! my name's Boris" <-- ohoh..
// DEBUGGINGOBJECT-ORIENTED PROGRAMMING

// GIVEN

function Warrior(n) {
  name = n;
  this.name = function (n) {
    if (n) name = n;
    return name;
  }
}

Warrior.prototype.toString = function () {
  return "Hi! my name's " + this.name();
}

// SOLUTION 

function Warrior(n) {
  var name = n; // <----- by adding the var there is now proper closure 
  this.name = function (n) {
    if (n) name = n;
    return name;
  }
}

Warrior.prototype.toString = function () {
  return "Hi! my name's " + this.name();
}