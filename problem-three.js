//////////////////////////////////////////
//
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

/////////////////////////
//Saturday 11:24pm
//////////////////////////

// var givenNum = 28;
var givenNum = 600851475143
for (let i = Math.floor(givenNum / 2); i > 1; i--) {
  if (givenNum % i == 0) {
    // console.log("factor:" + i);
    var prime = true;
    for (let j = Math.floor(Math.sqrt(i)); j > 1; j--) {
      if (i % j == 0) {
        prime = false;
        // console.log("composite:" + i + "(" + j + ")");
        break;
      }
    }
    if (prime) {
      console.log(i, prime);
      break;
  }
  }
}

///trying switch///
