function addMinimum$(word: string): number {
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

function addMinimum(word: string): number {
  const n = word.length;
  let i = 0;
  let j: "a" | "b" | "c" = "a";

  let ans = 0;
  while (i < n) {
    if (word[i] !== j) {
      ans++;
    } else {
      i++;
    }

    if (j === "a") {
      j = "b";
    } else if (j === "b") {
      j = "c";
    } else {
      j = "a";
    }
  }

  if (j !== "a") {
    ans += j === "b" ? 2 : 1;
  }

  return ans;
}

export {};
