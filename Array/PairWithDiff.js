//Pair With Given DifferenceGiven an one-dimensional unsorted array A
//containing N integers.You are also given aninteger B, find if there
//exists a pair of elements in the array whose difference is B.Return1
//if any such pair exists else return 0.
//Problem Constraints 1 <= N <= 105 -103 <= A[i]<= 103 -105 <= B <= 105Input
//Format First argument is an integer array A of size N. Second argument is
//aninteger B.Output Format Return 1 if any such pair exists else return 0.
//Example Input Input 1: A = [5, 10, 3, 2, 50, 80] B = 78
//Input 2: A = [-10, 20] B = 30
//Example Output Output 1: 1 Output 2: 1Example Explanation
//Explanation 1: Pair (80, 2) gives a difference of 78.
//Explanation 2:Pair (20, -10) gives a difference of 30 i.e 20 - (-10) => 20 + 10 => 30

let A = [80, 5, 10, 3, 2, 50, 89, 67, 28, 44, 11, 67];
let B = 22;
function twoDiffArray(arr, B) {
  arr.sort((a, b) => {
    return a - b;
  });
  let targetNum;
  let hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > B) {
      targetNum = arr[i] - B;
    } else {
      targetNum = B + arr[i];
    }
    if (hashMap.has(targetNum)) {
      console.log(arr[i], targetNum);
      return 1;
    } else {
      hashMap.set(arr[i], i);
    }
  }
  return 0;
}

console.log(twoDiffArray(A, B));

function twoDiff(array, B) {
  array.sort((a, b) => {
    return b - a;
  });
  let i = 0;
  let targetNum;
  let index_Map = new Map();
  for (i = 0; i < array.length - 1; i++) {
    if (array[i] > B) {
      targetNum = array[i] - B;
    } else {
      targetNum = B + array[i];
    }

    if (index_Map.has(targetNum)) {
      console.log(array[i], targetNum);
      return 1;
    } else {
      index_Map.set(array[i], i);
    }
  }
  return 0;
}

console.log("okay check", twoDiff(A, B));
