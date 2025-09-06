function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  const n = arr.length;
  let ans = 0;

  let sum = 0;
  for (let i = 0, j = 0; j < n; j++) {
    sum += arr[j];
    while (j - i + 1 > k) {
      sum -= arr[i++];
    }

    if (j - i + 1 == k && sum / k >= threshold) {
      ans++;
    }
  }

  return ans;
}

export { numOfSubarrays };
