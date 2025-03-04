// Find the longest Word in a String

// Return the length of the longest word in the provided sentence.

// Your response should be a number. For these algorithms,
// you are allowed to use the split() method.

//declare function findLongestWord, string as argument
// change string into array with split method
//declare variable for new array
//declare  max value of array is the first item of array[0] to compare
//fooloop start:0; end:arr.length
//conditin if max <  new array [i].length
//true resign max in to  new array [i].length value
//after for loop return max value

function findLongestWord(string) {
  let wordArray = string.split(" ");
  //[May, the, force, be, with, you]
  let max = wordArray[0].length;
  for (let i = 1; i < wordArray.length; i++) {
    if (max < wordArray[i].length) {
      max = wordArray[i].length;
    }
  }
  return max;
}
console.log(findLongestWord("May the force be with you"));

// findLongestWord("The quick brown fox jumped over the lazy dog")  // should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog"). // should return 6.
// findLongestWord("May the force be with you")  // should return 5.
