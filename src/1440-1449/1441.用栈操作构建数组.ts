function buildArray(target: number[], n: number): string[] {
  const m = target.length;
  const ans: ("Push" | "Pop")[] = [];
  let index = 0;

  let i = 1;
  while (index < m) {
    while (i !== target[index]) {
      ans.push("Push", "Pop");
      i++;
    }
    i++;
    index++;
    ans.push("Push");
  }

  return ans;
}

export {};
