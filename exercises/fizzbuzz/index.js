// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// approach 1
function fizzBuzz(n) {
  const results = [];

  while (n >= 1) {
    let value;

    if (n % 3 === 0 && n % 5 === 0) {
      value = "fizzbuzz";
    } else if (n % 3 === 0) {
      value = "fizz";
    } else if (n % 5 === 0) {
      value = "buzz";
    } else {
      value = n;
    }

    results.unshift(value);

    n--;
  }

  results.forEach((result) => console.log(result));

  return results;
}

// approach 2
// function fizzBuzz(n) {
//   let init = 0;
//   while (init <= n) {
//     return init % 3 === 0
//       ? "fizz"
//       : init % 5 === 0
//       ? "buzz"
//       : init % 3 === 0 && init % 5 === 0
//       ? "fizzbuzz"
//       : init;

//     init--;
//   }
// }

// approach 3
// function fizzBuzz(n) {
//   for (let i = n; i <= 0; i--) {
//     return i % 3 === 0
//       ? "fizz"
//       : i % 5 === 0
//       ? "buzz"
//       : i % 3 === 0 && i % 5 === 0
//       ? "fizzbuzz"
//       : i;
//   }
// }

module.exports = fizzBuzz;
