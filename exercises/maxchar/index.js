// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//approach 1
// function maxChar(str) {
//   const initialObj = {};
//   let maxChar = "";
//   let maxCount = 0;

//   for (eachChar of str) {
//     initialObj[eachChar] = initialObj[eachChar] + 1 || 1;

//     if (initialObj[eachChar] > maxCount) {
//       initialObj[eachChar] = maxCount;
//       maxChar = eachChar;
//     }
//   }
//   return maxChar;
// }

// approach 2

function maxChar(str) {
  let maxChar = "";
  let maxCount = 0;
  str.split("").reduce((accu, curr) => {
    accu[curr] = accu[curr] + 1 || 1;

    if (accu[curr] > maxCount) {
      maxCount = accu[curr];
      maxChar = curr;
    }

    return accu;
  }, {});

  return maxChar;
}

module.exports = maxChar;
