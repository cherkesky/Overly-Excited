// console.log("Hello World!")

// Create an addExcitement function that should console.log() rows of words.It should take an array containing the words of a sentence and output them in the developer console.

// Example output:

// The
// The walrus
// The walrus danced
// The walrus danced through
// The walrus danced through the
// The walrus danced through the trees
// The walrus danced through the trees in
// The walrus danced through the trees in the
// The walrus danced through the trees in the light
// The walrus danced through the trees in the light of
// The walrus danced through the trees in the light of the
// The walrus danced through the trees in the light of the moon ...

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement(theWordArray) {

  // Each time the for loop executes, you're going to add one more word to this string
  let buildMeUp = ""
  let thirdWordCounter = 0;

  for (let i = 0; i < theWordArray.length; i++) {
    thirdWordCounter++;
        // lets check if thirdWordCounter got to 3, and if so, lets add a print out of "!"
    if (thirdWordCounter === 3) {
      buildMeUp += sentence[i] += "!" + " ";
      // lets reset thirdWordCounter to get ready for counting again to 3
      thirdWordCounter = 0;
    } else {
      // Concatenate the new word onto buildMeUp
      buildMeUp += sentence[i] += " ";
      // Print buildMeUp to the console
      console.log(buildMeUp);
    }
  }
}

// Invoke the function and pass in the array
addExcitement(sentence)


