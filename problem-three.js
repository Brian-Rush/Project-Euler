//////////////////////////////////////////
//
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

///////////////////////////////////
// Saturday 5pm
///////////////////////////////////

//Function for determining if a number is prime:

var isPrime = input => {
  let prime = true;
  for (i = Math.floor(Math.sqrt(input)); i >= 2; i--) {
    if (input % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

isPrime(14);

//Function for determining if a number is a factor of the given number:

var isFactor = (dividend, divisor) => {
  let factor = false;
  if (dividend % divisor === 0) {
    factor = true;
  }
  return factor;
}

var isBoth = (bigNum) => {
  for (littleNum = Math.floor(bigNum / 2); littleNum > 1; littleNum--) {
    isFactor(bigNum, littleNum);
    console.log(isFactor);
    if (isFactor) {
      isPrime(littleNum);
      if (isPrime = true) {
        console.log(littleNum);
        break;
      }
    }
  }
}

isBoth(28);




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
