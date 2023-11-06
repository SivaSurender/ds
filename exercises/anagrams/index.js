// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const countChar = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-z]/g, "")
      .split("")
      .reduce((charCount, char) => {
        if (charCount[char]) {
          // console.log(charCount[char])
          charCount[char]++;
        } else {
          charCount[char] = 1;
        }
        return charCount;
      }, {});
  };

  const charCountA = countChar(stringA);
  const charCountB = countChar(stringB);

  console.log({ charCountA, charCountB });

  if (Object.keys(charCountA).length !== Object.keys(charCountB).length) {
    return false;
  }

  for (let char in charCountA) {
    if (charCountA[char] !== charCountB[char]) {
      return false;
    }
  }

  return true;
}

anagrams("rail safety", "fairy tales");

module.exports = anagrams;
