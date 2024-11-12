function countKConstraintSubstrings(s: string, k: number): number {
  const n = s.length;
  const count: [number, number] = [0, 0];
  let ans = 0;

  let left = 0;
  for (let right = 0; right < n; right++) {
    count[s[right] === "0" ? 0 : 1]++;

    while (count[0] > k && count[1] > k) {
      count[s[left] === "0" ? 0 : 1]--;
      left++;
    }

    ans += right - left + 1;
  }

  return ans;
}

export { countKConstraintSubstrings };
