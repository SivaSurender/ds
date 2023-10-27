// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// approach 1
function reverseInt(n) {
  let change = String(n).split("");

  let id = change.includes("-")
    ? change.filter((each) => each !== "-")
    : change;
  return change.includes("-")
    ? Number("-" + id.reverse().join(""))
    : Number(id.reverse().join(""));
}

module.exports = reverseInt;
