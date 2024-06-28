// Array Mappings
// Oh no, the map method for arrays has been disabled. Can you fix it?

// In case you haven't come across the map method for arrays, here is how it works:

// [1,2,3].map(x => x ** 2) === [1,4,9]
// [1,2,3].map(x => 2 * x) === [2,4,6]
// [1,2,3].map(x => 2 ** x) === [2,4,8]
// [1,2,3].map(x => x.toString()) === ["1","2","3"]
// ["1","2","3"].map(x => parseInt(x)) === [1,2,3]
// ["random","array","to","be","mapped"].map(x => mapping(x)) === [mapping("random"),
// mapping("array"),mapping("to"),mapping("be"),mapping("mapped")]
// The map method does not mutate the original array.

// ARRAYSOBJECT-ORIENTED PROGRAMMINGFUNDAMENTALS

// SOLUTION

Array.prototype.map = function(func){
  var res = [];
  for(var i=0;i<this.length;i++){
    res.push(func(this[i]));
  }
  return res;
}

// this solution is about knowing how to code the map method (but at a high level?) 
// passing function that is called to push each new element to the empty array
