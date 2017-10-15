


//////////////////////////////////////////

//
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

//////////////
////////////// Saturday 3pm. More efficient.
//////////////
// var givenNum = 600851475143;

var factors = [];

var givenNum = 28;
for (i = Math.floor(givenNum / 2); i > 0; i--) {
  if (givenNum % i === 0) {
    for (thisNum = Math.floor(Math.sqrt(i)); thisNum > 1; thisNum--) {
      if (i % thisNum === 0) {
        prime = false;
      } else {
        prime = true;
        console.log(i, thisNum);
      }
    }
  }
}
if (prime = true) {
  console.log(i, thisNum);
  break;
}



var givenNum = 35;
for (i = 14; i > 0; i--) {
  if (28 % 14 === 0) {
    for (thisNum = 4; thisNum > 1; thisNum--) {
      if (14 % 4 === 0) {
        prime = false;
      } else {
        prime = true;
        console.log(givenNum);
        console.log(i);
        console.log(thisNum);
      }
    }
  }
}
// if (prime = true) {
//   console.log(i);
//   break;
// }
