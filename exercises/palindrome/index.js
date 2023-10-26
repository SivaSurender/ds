// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// 1
function palindrome(str) {
  let initial = str;
  let final = "";

  for (i = str.length; i >= 0; i--) {
    final += str.charAt(i);
  }

  return initial === final;
}

module.exports = palindrome;
