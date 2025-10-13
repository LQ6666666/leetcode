function countTriplets(arr: number[]): number {
  const n = arr.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let sum = arr[i];
    for (let k = i + 1; k < n; k++) {
      sum ^= arr[k];
      if (sum == 0) {
        ans += k - i;
      }
    }
  }
  return ans;
}

export { countTriplets };
