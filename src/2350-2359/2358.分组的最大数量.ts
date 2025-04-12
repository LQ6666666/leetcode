function maximumGroups(grades: number[]): number {
  const n = grades.length;

  let ans = 0;
  let j = 1;
  for (let i = 0; i < n; i += j) {
    j++;
    ans++;
  }

  return ans;
}

export { maximumGroups };
