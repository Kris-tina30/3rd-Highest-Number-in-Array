// Fibonacci Sequence

// A great friend of yours, Fibonacci, just came up with a sequence of
// numbers that is really easy to compute. However, his time allows him
// to calculate by hand only the first 10-15 terms of the sequence; of course,
// he is busy trying to come up with some other interesting sequence. So he gives
// you the first terms and asks you to write an algorithm that will return the n-th
// term in the sequence.

// His sequence looks like this: 1 1 2 3 5 8 13 21 34 ...

// Immediately you find the pattern: setting the first two terms to be 1,
// any other term is the sum of the two previous terms. 1+1=2, 1+2=3, 2+3=5,
// 3+5=8, 5+8=13 and so on.

// In this way, if n would be equal to 4 your result should be 3; but if n is 7,
// then the result is 13.

//declare function getFibonacci, num as argument
//condition if num = 1 or num = 2 , result 1
//declare 3 variable: priv1 = 1, priv2 = 1, current
//fooloop start:3; end:num
//current = priv1 + priv2
//then sfift numbers:  priv1 becomes priv2 ;priv2 becomes current;
//print current number;

function getFibonacci(num) {
  if (num === 1 || num === 2) {
    return 1;
  }
  let priv1 = 1,
    priv2 = 1,
    current;
  for (let i = 3; i <= num; i++) {
    current = priv1 + priv2;
    priv1 = priv2;
    priv2 = current;
  }
  return current;
}
console.log(getFibonacci(4)); // 3
console.log(getFibonacci(7)); // 13
