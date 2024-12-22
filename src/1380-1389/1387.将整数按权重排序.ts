function getKth(lo: number, hi: number, k: number): number {
  const memo = new Map<number, number>();

  const nums = new Array<number>(hi - lo + 1);

  for (let x = lo; x <= hi; x++) {
    nums[x - lo] = x;
  }

  nums.sort((a, b) => {
    const w1 = dfs(a);
    const w2 = dfs(b);

    if (w1 === w2) {
      return a - b;
    } else {
      return w1 - w2;
    }
  });

  return nums[k - 1];

  function dfs(x: number): number {
    if (x === 1) return 0;
    if (memo.has(x)) return memo.get(x)!;

    let result: number = 1;

    if (x % 2 === 0) {
      result += dfs(x / 2);
    } else {
      result += dfs(3 * x + 1);
    }

    memo.set(x, result);
    return result;
  }
}

export { getKth };
