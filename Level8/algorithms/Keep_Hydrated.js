// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5
// ALGORITHMSMATHEMATICSFUNDAMENTALS

// MY CODE:

function litres(time) {

  return (Math.floor(time / 2));
}

// drink = 0.5 liters/hrCycling
// time is given in hours
// return the number of liters will be drank, rounded down (Math.Floor())
// will time ever be given in any way other than a positive integer?
// will time ever be 0?
