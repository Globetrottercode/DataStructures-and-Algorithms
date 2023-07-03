//Repeatedly swap two adjacent elements if they are in wrong order
//Time Complexity - O(n2)
//Space Complexity - O(1)

let arr = [1, 34, 78, 99, 45, 69, 36, 67, 89, 35, 56, 17, 0];

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// console.log(bubbleSort(arr));

// Descending order

function desBubbleSort(arr) {
  let counter = 1;
  let i = 0;
  while (counter < arr.length) {
    for (i = 0; i < arr.length - counter; i++) {
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    counter++;
  }
  return arr;
}

// console.log(desBubbleSort(arr));

function bubbleSort(arr) {
  let i, j;
  for (i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr), "Sorted in Asc");
console.log(desBubbleSort(arr), "Desc Sort");
