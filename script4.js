// Title Case a Sentence

// Return the provided string with the first letter of each word
// capitalized. Make sure the rest of the word is in lowercase.

// For the purpose of this exercise, you should also capitalize on
// connecting words like "the" and "of".

// For this algorithm, you can use the split() method.

//declare function titleCase, string as argument
// declare variable for new array to hold changed strind
// use method toLowerCase() than change string into array with split method
// fooloop start:0; end:arr.length
// initializate new array value with farst element of array + array to splice from 1
//after for loop return array with join(" ") method

function titleCase(string) {
  let wordArray = string.toLowerCase().split(" ");
  //[May, the, force, be, with, you]
  for (let i = 0; i < wordArray.length; i++) {
    wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].slice(1);
  }
  return wordArray.join(" ");
}
console.log(titleCase("I'm a little tea pot"));

titleCase("I'm a little tea pot"); // should return a string.
titleCase("I'm a little tea pot"); // should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt"); // should return "Short And Stout".
