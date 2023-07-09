//Spiral Order Matrix - II

let twoDimArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [21, 34, 55],
];

function SpiralMatrix(arr) {
  let result = [];
  let top = 0;
  let bottom = arr.length;
  let right = arr[0].length;
  let left = 0;
  let totalEL = bottom * right;
  while (result.length < totalEL) {
    if (left < right && result.length < totalEL) {
      for (let i = left; i < right; i++) {
        result.push(arr[top][i]);
      }
      top = top + 1;
    }
    if (top < bottom && result.length < totalEL) {
      for (i = top; i < bottom; i++) {
        result.push(arr[i][right - 1]);
      }
      right = right - 1;
    }
    if (right > left && result.length < totalEL) {
      for (i = right - 1; i >= left; i--) {
        result.push(arr[bottom - 1][i]);
      }
      bottom = bottom - 1;
    }
    if (bottom > top && result.length < totalEL) {
      for (i = bottom - 1; i >= top; i--) {
        result.push(arr[i][left]);
      }
      left = left + 1;
    }
  }
  return result;
}

console.log(SpiralMatrix(twoDimArr));
