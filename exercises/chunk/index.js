// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   const mainArr = [];

//   let childArr = [];
//   array.forEach((item, index) => {
//     childArr.push(item);
//     if (childArr.length === size || index === array.length - 1) {
//       mainArr.push(childArr);
//       childArr = [];
//     }
//   });

//   return mainArr;
// }

// approach 2

function chunk(array, size) {
  let mainArr = [];
  let subArr = [];

  for (let i = 0; i < array.length; i++) {
    subArr.push(array[i]);

    if (subArr.length === size || i === array.length - 1) {
      mainArr.push(subArr);
      subArr = [];
    }
  }
  return mainArr;
}

module.exports = chunk;
