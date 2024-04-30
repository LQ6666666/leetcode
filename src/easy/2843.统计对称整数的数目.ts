function countSymmetricIntegers(low: number, high: number): number {
  let ans = 0;
  for (let i = low; i <= high; i++) {
    const s = i.toString();
    if (s.length % 2 !== 0) continue;

    const m = s.length / 2;
    let left = 0;
    for (let j = 0; j < m; j++) {
      left += +s[j];
    }

    let right = 0;
    for (let j = m; j < s.length; j++) {
      right += +s[j];
    }

    if (left === right) {
      ans++;
    }
  }
  return ans;
}

export { countSymmetricIntegers };
