// Having an array of numbers, write an algorithm that will
// return the 3rd highest number in the array. Your algorithm
// should do only one iteration of the array (just one for/while loop).

// Example:

//Using the array
let arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
//The correct answer is : 11

//declare 3 variable: 1-st, 2-nd, 3rd highest number
//fooloop start:0; end:arr.length
//condition if arr[i] > first = true -> than  first  = arr[i];
//false chack arr[i] > second = true -> than  second  = arr[i];
//else if arr[i] > third = true -> than  third  = arr[i];
//print third

let first = 0;
let second = 0;
let third = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > first) {
    third = second;
    second = first;
    first = arr[i];
  } else if (arr[i] > second) {
    third = second;
    second = arr[i];
  } else if (arr[i] > third) {
    third = arr[i];
  }
}

console.log(third);
