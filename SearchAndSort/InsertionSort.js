//Insert an element from an unsorted array to its correct position in a sorted array
// Time Complexity - O(N2)
// Space Complexity - O(1)
let arr = [1, 34, 78, 99, 45, 69, 36, 67, 89, 35, 56, 17];

// function insertionSort(arr) {
//   // Ascending Order
//   let i, j;
//   for (i = 1; i < arr.length; i++) {
//     for (j = i - 1; j >= 0; j--) {
//       if (arr[j + 1] < arr[j]) {
//         [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
//       }
//     }
//   }
//   return arr;
// }

// //console.log(`Ascending Order by Insertion Sort :`);
// console.log(insertionSort(arr));
// console.log(arr);

function InsertionSort(arr) {
  let i, j;
  for (i = 0; i < arr.length - 1; i++) {
    for (j = i; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// function InsertionSort(arr) {
//   for (i = 0; i < arr.length - 1; i++) {
//     for (j = i; j >= 0; j--) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

console.log(InsertionSort(arr));
