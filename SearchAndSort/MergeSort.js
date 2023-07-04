// Time Complexity - O(nlogn)
// T(n) = 2T(n/2) + O(n)
// Space Complexity - O(n)
let arr = [1, 34, 78, 99, 45, 69, 36, 67, 89, 35, 56, 17];

function letsMergeSort(arr) {
  mergeSort(arr, 0, arr.length - 1);
  function mergeSort(arr, l, r) {
    if (l < r) {
      let m = Math.trunc((l + r) / 2);
      mergeSort(arr, l, m);
      mergeSort(arr, m + 1, r);
      merge(l, m, r);
    }
  }
  function merge(l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;
    let A = new Array(n1);
    let B = new Array(n2);
    let i = 0;
    let j = 0;
    let k = l;
    for (i = 0; i < n1; i++) {
      A[i] = arr[l + i];
    }
    for (j = 0; j < n2; j++) {
      B[j] = arr[m + 1 + j];
    }
    i = 0;
    j = 0;
    while (i < n1 && j < n2) {
      if (A[i] < B[j]) {
        arr[k++] = A[i++];
      } else if (B[j] < A[i]) {
        arr[k++] = B[j++];
      }
    }
    for (; i < n1; i++) {
      arr[k++] = A[i];
    }
    for (; j < n2; j++) {
      arr[k++] = B[j];
    }
  }
  return arr;
}

console.log(letsMergeSort(arr));
