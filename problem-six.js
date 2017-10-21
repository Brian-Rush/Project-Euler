//////////
//The sum of the squares of the first ten natural numbers is,
//
//12 + 22 + ... + 102 = 385
//The square of the sum of the first ten natural numbers is,
//
// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


// 1^2 + 2(1 * 2) + 2^2
//   (a+b)^2 = a^2 +2ab +b^2
//   (a+b+c)(a+b+c) =  a2 + 2ab + 2ac +b2 +2bc +c2
//   (a+b+c+d)(a+b+c+d) = a2 + 2ab + 2ac + 2ad +b2 + 2bc + 2bd + c2 + 2cd +d2
//
//   individually squared = x;
//   collectively squared = x + 2(permutation)

  //make a loop that multiplies a given number by every number after it.
  //nest that loop in a loop that increases the given number by one after it has exhausted the numbers after it.

//make a for loop that multiplies each number by each number after it.
//put each product in a new array and add them up. the sum of the products time two is the new answer.

var productsToSum = [];
var arrayTotal = 1;
var firstFunc = (small, large) => {
  for (var i = small; i <= large; i++) {
    for (var j = (i + 1); j <= large; j++) {
      var currentProd = i * (j);
      productsToSum.push(currentProd);

    }
  console.log(productsToSum);
  }
  return productsToSum;
}

function getSum(oneNum, anotherNum) {
  console.log(oneNum, anotherNum);
  var total = oneNum + anotherNum;
  console.log(total);
  return total;
}

function sumArray(array, func) {
  console.log(array);
  console.log(func);
  arrayTotal = array.reduce(func);
  console.log(arrayTotal);
  return arrayTotal;
}

function getAnswer(array, func) {
  sumArray(array, func)
  var answer = 2 * (arrayTotal);
  console.log(answer);
  return answer;
}

// var testArray = [1, 2, 3, 4, 5];

firstFunc(1, 100);
getAnswer(productsToSum, getSum);
