function beautySum(s: string): number {
  const n = s.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    const counts = new Array(26).fill(0);
    let max = 0;

    for (let j = i; j < n; j++) {
      const index = s[j].charCodeAt(0) - 97;
      counts[index]++;

      max = Math.max(max, counts[index]);

      const min = counts.reduce(
        (min, count) => (count > 0 ? Math.min(count, min) : min),
        Number.MAX_SAFE_INTEGER
      );

      ans += max - min;
    }
  }

  return ans;
}

console.log(beautySum("aabcb"));
console.log(beautySum("aabcbaa"));

// export { beautySum };
