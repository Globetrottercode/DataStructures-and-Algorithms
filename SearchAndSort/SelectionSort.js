// Find the minimum element of an array and swap it with the first element
// of the array and then so on
// Time Complexity - O(n2)
// Space Complexity - O(1)

let arr = [1, 34, 78, 99, 45, 69, 36, 67, 89, 35, 56, 17];

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }
//   }
//   return arr;
// }

// console.log(selectionSort(arr));

// function selectionSort(arr) {
//   for (i = 0; i < arr.length - 1; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }
//   }
//   return arr;
// }

var selectionSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
};

console.log(`Selection Sort : ${selectionSort(arr)}`);
console.log("SELECTION : ", selectionSort(arr));
