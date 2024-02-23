// Bob drinks too much, and he gets in trouble for it a lot. He drinks so much, in fact,
// that he has broken the local law enforcement's breathalizer with his alcoholic breath! 
// Bob feels simply aweful, so he wants to make up for it by creating a function that will 
// calculate his blood-alcohol level for them. Unfortunately, Bob has gotten too inebriated 
// to do any programming today, so he needs your help!

// He did manage to research the formula for blood-alcohol content before getting too drunk, 
// which he describes below.

// BAC calculator Formula:

// BAC% = (A × 5.14 / W × r) - .015 × H 

// A: Total alcohol consumed, in ounces (oz)
// W: Body weight, in pounds (lbs)
// r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
// H: Time passed since drinking, in hours
// Source:

// http://www.endmemo.com/medical/bac.php

// Alcohol consumed will be passed as a drinks object with two properties: ounces (the total 
// volume of beverage consumed in ounces), and abv (the % of alcohol by volume of the beverage 
// as a floating point number--such as 0.05 for 5% abv beer or 0.4 for 40% abv whisky). For 
// simplicity, Bob assures us that he drinks the same kind of beverage each time he drinks.

// The gender will be passed as a string, either "male" or "female".

// Output must be returned as a number data-type, greater than or equal to 0, with up to 4 
// decimal places. No error handling will be required.

// Using these parameters, create the function that will calculate Bob's and other partier's BAC.

// FUNDAMENTALSALGORITHMSLOGIC

// GIVEN

function bloodAlcoholContent(drinks, weight, sex, time) {
  return bac;
}

// SOLUTION

function bloodAlcoholContent(drinks, weight, sex, time) {
  // drinks (object), 
  // properties: 
  // ounces (volume consumed), 
  // abv (% of alcohol by volume as a float such as 0.05 instead of 5%)
  // BAC% = (A × 5.14 / W × r) - .015 × H 
  // A: Total alcohol consumed, in ounces (oz) 
  let A = (drinks.ounces * drinks.abv)
  // W: Body weight, in pounds (lbs)
  let W = weight
  // r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
  let r = sex === 'male' ? 0.73 : 0.66
  // H: Time passed since drinking, in hours
  let H = time;

  let bac = (A * 5.14 / W * r) - .015 * H;


  return Number(bac.toFixed(4));
}

// refactored solution

function bloodAlcoholContent(drinks, weight, sex, time) {
  let bac = ((drinks.ounces * drinks.abv) * 5.14 / weight * (sex === "male" ? 0.73 : 0.66)) - .015 * time
  return Number(bac.toFixed(4));
}