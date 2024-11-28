function smallestNumber(pattern: string): string {
  const n = pattern.length;
  let i = 0;
  let cur = 1;
  const ans = new Array<number>(n + 1);

  while (i < n) {
    if (i > 0 && pattern[i] === "I") {
      i++;
    }

    for (; i < n && pattern[i] === "I"; i++) {
      ans[i] = cur++;
    }

    const k = i;
    while (i < n && pattern[i] === "D") {
      i++;
    }

    for (let j = i; j >= k; j--) {
      ans[j] = cur++;
    }
  }

  return ans.join("");
}

export { smallestNumber };
