let twoDimArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [21, 34, 55],
];

function spiralMatrix(arr) {
  console.log("hello");
  let top = 0;
  let left = 0;
  let bottom = arr.length;
  let right = arr[0].length;
  let res = [];
  let c = 0;
  let total = bottom * right;
  while (c < total) {
    for (let i = left; c < total && i < right; i++) {
      res.push(arr[top][i]);
      c++;
    }
    top = top + 1;
    for (let i = top; c < total && i < bottom; i++) {
      res.push(arr[i][right - 1]);
      c++;
    }
    right = right - 1;
    for (let i = right - 1; c < total && i >= left; i--) {
      res.push(arr[bottom - 1][i]);
      c++;
    }
    bottom = bottom - 1;
    for (let i = bottom - 1; c < total && i >= top; i--) {
      res.push(arr[i][left]);
      c++;
    }
    left = left + 1;
  }
  return res;
}

console.log(spiralMatrix(twoDimArr));
