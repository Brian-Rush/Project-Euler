


//////////////////////////////////////////

//
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

//3. if a given factor in the array is prime, console.log it and stop the loop.

//1. find factors of givenNum, push them to array
var givenNum = 600851475143;
for (i = givenNum - 1; i > 0; i--) {
  if (givenNum % i === 0) {
    console.log(i);
    break;
  }
}
var primeFactors = [];
var givenNum = 28;

//////////////
var givenNum = 600851475143;
var factors = [];

//1. find factors of givenNum, push them to array
for (i = givenNum - 1; i > 0; i--) {
  if (givenNum % i === 0) {
    factors.push(i)
  }
}
console.log(factors);

//2. loop through array, testing each factor for prime-ness
for (i = 0; i < factors.length; i++) {
  var divisor = 2
  // var upperLimit = factors[i]/2;
  var prime = true;
  for (j = 2; j <= Math.sqrt(factors[i]); j++) {
    if (factors[i] % j === 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    console.log(factors[i]);
    break;
  }
}
