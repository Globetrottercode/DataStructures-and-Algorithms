console.log("This is Binary search");
//Time Complexity - O(logN)
//Space Complexity - O(1)
// Take two pointers start index and end index , find mid if key equals mid index, then return mid index ,
// else if mid is greater than key than make end equal to mid index -1 , else if mid is less than key than,
// make start index equl to mid + 1 , keep continuing the process until start index < end index , if still not
// found return -1

let sArr = [1, 17, 34, 52, 63, 74, 81, 98]; // we need our data to be in sorted form for binary search

// function binarySearch(arr, key) {
//   let s = 0;
//   let e = arr.length - 1;
//   let mid;
//   while (s < e) {
//     mid = Math.trunc((s + e) / 2);
//     if (arr[mid] === key) {
//       return mid;
//     }
//     if (arr[mid] > key) {
//       e = mid - 1;
//     } else if (arr[mid] < key) {
//       s = mid + 1;
//     }
//   }
//   return -1;
// }

var binarySearch = function (arr, key) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.trunc((start + end) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] > key) {
      end = mid - 1;
    } else if (arr[mid] < key) {
      start = mid + 1;
    }
  }
  return -1;
};

console.log(binarySearch(sArr, 74));
