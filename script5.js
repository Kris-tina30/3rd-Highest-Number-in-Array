// Sum All Numbers in a Range

// We'll pass you an array of two numbers. Return the sum of those two numbers
// and all numbers between them.

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
