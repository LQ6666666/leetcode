function reverseStr(s: string, k: number): string {
  const n = s.length;
  const arr = s.split("");

  for (let i = 0; i < n; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, n - 1);
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr.join("");
}

export { reverseStr };
