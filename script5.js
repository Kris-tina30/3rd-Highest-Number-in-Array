// Sum All Numbers in a Range

// We'll pass you an array of two numbers. Return the sum of those two numbers
// and all numbers between them.

//declare function sumAll, arr as argument
// declare variable min and use Math.min to find min number in array
//declare variable max and use Math.max to find max number in array
//declare variable sum = 0
// forloop start:min; end:max
// sum = sum + i
//return sum

function sumAll(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}
console.log(sumAll([1, 4]));
