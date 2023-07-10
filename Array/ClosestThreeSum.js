let S = [-1, 2, 1, -4];
let T = 2;

function nearest3Sum(S, T) {
  S.sort((a, b) => {
    return a - b;
  });
  let i, l, r;
  let sum = 0;
  let nearestSum = Number.MAX_SAFE_INTEGER;
  let diff;
  let minDiff = Number.MAX_SAFE_INTEGER;
  for (i = 0; i < S.length; i++) {
    l = i + 1;
    r = S.length - 1;
    let c = 0;
    while (l < r) {
      c++;
      sum = S[i] + S[l] + S[r];
      if (sum > T) {
        r = r - 1;
        diff = sum - T;
      } else if (sum < T) {
        l = l + 1;
        diff = T - sum;
      } else if (sum === T) {
        console.log("oo");
        return { sum, vals: [S[i], S[l], S[r]] };
      }
      if (diff < minDiff) {
        minDiff = diff;
        nearestSum = sum;
      }
    }
  }
  return nearestSum;
}

console.log(nearest3Sum(S, T));
