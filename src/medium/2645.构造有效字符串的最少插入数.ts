function addMinimum(word: string): number {
  const chArr = ["a", "b", "c"];
  const n = word.length;

  let ans = 0;
  let i = 0,
    j = 0;
  while (i < n) {
    if (word[i] === chArr[j]) {
      i++;
    } else {
      ans++;
    }

    j = (j + 1) % 3;
  }

  const lastCh = word[n - 1];
  if (lastCh === "a") {
    ans += 2;
  } else if (lastCh === "b") {
    ans += 1;
  }

  return ans;
}

export {};
