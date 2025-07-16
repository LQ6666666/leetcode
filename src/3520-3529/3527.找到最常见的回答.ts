function findCommonResponse(responses: string[][]): string {
  const n = responses.length;
  const uniqueResponses = responses.map(item => new Set(item));
  const countMap = new Map<string, number>();
  let maxCount = 0;

  for (let i = 0; i < n; i++) {
    uniqueResponses[i].forEach(word => {
      const count = (countMap.get(word) ?? 0) + 1;
      countMap.set(word, count);
      maxCount = Math.max(maxCount, count);
    });
  }

  let ans = "";
  countMap.forEach((count, word) => {
    if (count === maxCount) {
      if (!ans || ans.localeCompare(word) > 0) {
        ans = word;
      }
    }
  });

  return ans;
}

export { findCommonResponse };
