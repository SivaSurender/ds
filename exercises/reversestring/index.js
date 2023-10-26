// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split("").reverse().join("");
// }
// function reverse(str) {
//   let rev = "";

//   for (let i = str.length; i >= 0; i--) {
//     rev = rev + str.charAt(i);
//   }

//   return rev;
// }
function reverse(str) {
  return str.split("").reduce((acc, curr) => curr + acc, "");
}

// const test = "car";
// let fdsf = "";
// for (let char of test) {
//   console.log(char);
//   fdsf = char + fdsf;
// }
// let test = "";

// test = "c" + test;
// test = "t" + test;
// console.log(test);

module.exports = reverse;
