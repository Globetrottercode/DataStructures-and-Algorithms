// Sort array of 0's,1's and 2's
//Given an array of size N containing only 0s, 1s, and 2s;
//sort the array in ascendingorder. Example 1
//Input:N = 5arr[]= {0 2 1 2 0} Output:0 0 1 2 2

let test = [0, 0, 2, 2, 1, 0, 2, 1, 0, 1, 0, 0, 1, 2, 2, 2, 1, 0, 0];

function sort012(arr) {
  let l = 0;
  let m = 0;
  let h = arr.length - 1;
  while (m < h) {
    if (arr[m] === 0) {
      [arr[m], arr[l]] = [arr[l], arr[m]];
      l++;
      m++;
    }
    if (arr[m] === 1) {
      m++;
    }
    if (arr[m] === 2) {
      [arr[h], arr[m]] = [arr[m], arr[h]];
      h--;
    }
  }
  return arr;
}

console.log(sort012(test));
