// // Factory Function (RETURNS an object rather than using 'this')
// function createCircle(radius){
//   return { // returning an object
//     radius,
//     draw: function(){
//       console.log('draw');
//     } 
//   };
// }
// const circle = createCircle(1);
// circle.draw();

// Constructor Function (first letter uppercase, uses 'new' to create a new empty object and then sets 'this' to reference it)
// function Circle(radius){
//   this.radius = radius; // 'this' is a reference to the object that is executing this piece of code
//   let defaultLocation = { x: 0, y: 0}; // **** make local variable
//   let computeLoc = function() { // **** make local method
//     // ...
//   }
//   this.draw = function() {
//     computeLoc(); // **** closure ****
//     console.log('draw');
//   }
// }

// const another = new Circle(10); // using 'new' does 3 things: 


// 1) creates empty object, 
// 2) set 'this' points to the global object
// 3) return the object from this function

// let x = {value: 10}
// let y = x;

// x.value=20;

// these are the same in functionality
// another.location = { x: 1 }; // this is less verbose than bracket notation
// another['location'] = { x: 1}; // bracket notation

function StopWatch(){
  let running = false; // private property
  let startTime = 0; // private property
  let stopTime = 0; // private property
  let duration = 0; // private property
  this.start = function(){ // public method, want to abstract and use getter and setter w validation
    if (running === false){ // check if running false, set startTime and set running to true; else throw error('Already running')
      running = true;
      startTime = new Date();
    } else {
      throw new Error('Already running')
    }
  };
  this.stop = function(){ // public method, want to abstract and use getter and setter w validation
    if (running === true){ // check if running true, set stopTime, call calcDuration() and set running to false; else throw error('Not running')
      running = false;
      stopTime = new Date();
      const seconds = (stopTime.getTime() - startTime.getTime())/1000;
      duration += seconds;
    } else {
      throw new Error('Not running currently.')
    }
  };

  this.reset = function () { // public method, set startTime and stopTime to 0
    running = false;
    startTime = 0;
    stopTime = 0;
    duration = 0;
  }

  // this.calcDuration = function(){ // public method, want to abstract and use getter and setter w validation
  //   // set (stopTime - startTime) to duration
  // };

  Object.defineProperty(this, 'duration', {
    get: function(){
      return duration;
    }
  })

}