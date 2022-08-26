function isPalindrome(word) {
  // Write your algorithm here
  //the function takes in a word and checks if its a palindrome
  const reversedWord = [];
  for (const letter of word){
    reversedWord.unshift(letter);
  }
  console.log(reversedWord.join(''));
  return reversedWord.join('') === word;
}

/* 
  Add your pseudocode here
  function isPalindrome(word){
    returns true if its equal to palindrome
    else returns false if its not equal
  }
*/

/*
  Add written explanation of your solution here
  a palindrome is a word that's the same when you reverse it
  create an array variable to compare to "word" then iterate over the length of word
  add the letters to front of array using unshift()
  turn the variable to a string and return it
  The join() method returns an array as a string. The join() method does not change the original array. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
