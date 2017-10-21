//////////////////
//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
/////////


///10: ignore 1, 2, 5
///9: ignore 3
//8: ignore 4
//7:
//6:
//2520 = (7*8*9*10)/2 = 2*(2*2)*(3*3)*5*7 [primes and perfect squares in range]
//2*5*7*9


//20: ignore 1, 2, 4, 5, 10
//19:
//18: ignore 3, 6, 9
//17:
//16: ignore 8
//15:
//14: ignore 7
//13:
//12:
//11:
// x = (11*13*7*2*17*3*19*5)  =
// x = (2*2*2*2*3*3*5*7*11*13*17*19)
// 16*9*5*7*11*13*17*19


//Shannon and I actually solved this one with some factoring and a calculator. no need to write code.

//the for loop below was an ill-advised first attempt, before we started factoring more.

for (var i = 2520; i >= 2520; i += 20) {
  if (i % 11 === 0 && i & 12 === 0 && i % 13 === 0 && i & 14 === 0 && i % 15 === 0 && i & 16 === 0 && i % 17 === 0 && i & 18 === 0 && i % 19 === 0 && i & 20 === 0){
        console.log(i);
  }
}
