// Largest Number in Arrays

// Return an array consisting of the largest number from each provided
// sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and
// access each member with array syntax arr[i].

//declare function largestOfFour, arr as argument
//fooloop start:0; end:arr.length
//declare  max value of array is the first item of array[i][0] to compare
//fooloop for sub array tart:0; end:arr[i].length
//conditin if max < arr[i][j]
//true  max=arr[i] [j]
//in the end of first loop resign/replase arr[i] to max
//return arr

array = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]; //Returns [5,27,39,1001]

function largestOfFour(arr) {
  for (let i = 0; i < arr.length; i++) {
    let max = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (max < arr[i][j]) {
        max = arr[i][j];
      }
    }
    arr[i] = max;
  }
  return arr;
}
console.log(largestOfFour(array));
