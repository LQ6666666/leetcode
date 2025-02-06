// set
function permuteUnique1(nums: number[]): number[][] {
  const n = nums.length;
  const result: Map<string, number[]> = new Map();
  let path: number[] = [];
  const map = new Map();

  function dfs() {
    if (path.length === nums.length) {
      result.set(path.toString(), path.slice());
    }

    for (let i = 0; i < n; i++) {
      if (map.get(i)) continue;

      map.set(i, true);
      path.push(nums[i]);

      dfs();

      path.pop();
      map.set(i, false);
    }
  }

  dfs();
  return Array.from(result.values());
}

// 剪枝
function permuteUnique(nums: number[]): number[][] {
  const n = nums.length;
  const ans: number[][] = [];
  const path: number[] = [];
  const visits = new Array<0 | 1>(n).fill(0);

  nums.sort((a, b) => a - b);
  dfs();
  return ans;

  function dfs() {
    if (path.length === nums.length) {
      ans.push(path.slice());
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visits[i] === 1) continue;

      // 如果有前一个数 && 当前数和前一个数相等 && 前一个数没被访问过
      // 上一个撤销的也是同样的数，可以剪枝
      if (i > 0 && nums[i] == nums[i - 1] && visits[i - 1] === 0) {
        continue;
      }

      visits[i] = 1;
      path.push(nums[i]);

      dfs();

      path.pop();
      visits[i] = 0;
    }
  }
}

export {};
