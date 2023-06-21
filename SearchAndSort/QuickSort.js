let arr = [1, 34, 78, 99, 45, 69, 36, 67, 89, 35, 56, 17];
let arr1 = [2, 1];

var quickSort = function (arr) {
  let a = [...arr];
  let h = arr.length - 1;
  let l = 0;
  function Sort(l, h) {
    if (l < h) {
      let j = partition(l, h);
      Sort(l, j);
      Sort(j + 1, h);
    }
  }
  function partition(l, h) {
    let pivot = Math.trunc((l + h) / 2);
    let i = l;
    let j = h;
    while (i < j) {
      while (a[i] < a[pivot]) {
        i++;
      }
      while (a[j] > a[pivot]) {
        j--;
      }
      if (i < j) {
        [a[i], a[j]] = [a[j], a[i]];
      }
    }
    [a[pivot], a[j]] = [a[j], a[pivot]];
    return j;
  }
  Sort(l, h);
  return a;
};

console.log(quickSort(arr));
