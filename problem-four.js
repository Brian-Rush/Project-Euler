//////////////
// //A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

//will be between 10,000 and 998,001
//reverse number
//see if number is palindrome -- compare forward and reverse
//see if number is 3 digits
//see if number is factor

//reverse the number
// var revNum = parseInt(num.toString().split("").reverse().join(""));


//////////////////////////

var palArray = []
//check if number is a palindrome
var isPalindrome = (num) => {
  var pal = false
  var backwards = parseInt(num.toString().split("").reverse().join(""));
  if (num === backwards) {
    pal = true;
    palArray.push(num);
  }
}

//make an array of palindromes in given range
var findPals = (small, big) => {
  for (var j = small; j <= big; j++) {
    isPalindrome(j);
  }
  console.log(palArray, palArray.length);
}

findPals(10000, 998001);

//Next steps: write a function to find out if a number is the product of two 3-digit numbers
//step backward through array and assess one at a time. console log first hit.

var theCheck = (checkedNum) => {
  for (var k = 100; k < 1000; k++) {
    var quotient = (checkedNum / k);
    console.log(quotient + "=" + checkedNum + "/" + k);
    if (Number.isInteger(quotient)) {
      console.log(quotient + " is an integer!");
      var quoLength = quotient.toString().match(/\d/g).length;
      console.log(quoLength);
      // return quoLength;
      if (quoLength === 3) {
        console.log("found a three digit factor!" + quotient, k, checkedNum);
        return true;
        // break;
      }
    }
  }
}

var findHighestHit = (givenArray) => {
  for (i = (givenArray.length - 1); i >= 0; i--) {
    if (theCheck(givenArray[i])) {
      break;
    }
    // theCheck(i);
  }
}

findHighestHit(palArray);
