function buildArray(target: number[], n: number): string[] {
  const t = target.at(-1)!;
  let index = 1;
  const ans: string[] = [];

  let i = 0;
  while (index !== t) {
    ans.push("Push");

    if (index !== target[i]) {
      ans.push("Pop");
    } else {
      i++;
    }

    index++;
  }

  ans.push("Push");

  return ans;
}

export { buildArray };
