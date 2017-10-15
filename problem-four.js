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
var num = 8912345
var revNum = parseInt(num.toString().split("").reverse().join(""));

var palArray = []
//check if number is a palindrome
var isPalindrome = (num) => {
  var pal = false
  var backwards = parseInt(num.toString().split("").reverse().join(""));
  if (num === backwards) {
    pal = true;
    // console.log(num);
    palArray.push(i);
  }
}

//make an array of palindromes in given range
var findPals = (small, big) => {
  for (i = small; i <= big; i++) {
    isPalindrome(i);
  }
  console.log(palArray, palArray.length);
}

findPals(10000, 998001);
