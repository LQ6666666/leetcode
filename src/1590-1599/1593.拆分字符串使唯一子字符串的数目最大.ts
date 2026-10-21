function maxUniqueSplit(s: string): number {
  const n = s.length;
  let ans = 0;
  const path = new Set<string>();
  return (helper(0), ans);

  function helper(startIndex: number) {
    if (startIndex === n) {
      ans = Math.max(ans, path.size);
      return;
    }

    for (let i = startIndex; i < n; i++) {
      const substr = s.slice(startIndex, i + 1);
      if (path.has(substr)) {
        continue;
      }
      path.add(substr);
      helper(i + 1);
      path.delete(substr);
    }
  }
}

export {};
