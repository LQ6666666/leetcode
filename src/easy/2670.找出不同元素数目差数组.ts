function $(nums: number[]): number[] {
  const n = nums.length;
  const ans = new Array<number>(n);
  const set = new Set<number>();
  // 正序前缀包括当前数字
  for (let i = 0; i < n; i++) {
    set.add(nums[i]);
    ans[i] = set.size;
  }

  set.clear();
  // 注意逆序后缀不包括当前数字
  for (let i = n - 1; i >= 0; i--) {
    set.add(nums[i]);

    if (i > 0) {
      ans[i - 1] -= set.size;
    }
  }

  return ans;
}

const N = 55;
function distinctDifferenceArray(nums: number[]): number[] {
  const n = nums.length;
  const prefix = new Array<number>(n).fill(0);
  const suffix = new Array<number>(n).fill(0);

  const preCnt = new Array<number>(N).fill(0);
  const sufCnt = new Array<number>(N).fill(0);
  for (let i = 0, j = n - 1, pc = 0, sc = 0; i < n && j >= 0; i++, j--) {
    if (preCnt[nums[i]] === 0) {
      preCnt[nums[i]] = 1;
      pc++;
    }
    prefix[i] = pc;

    if (sufCnt[nums[j]] === 0) {
      sufCnt[nums[j]] = 1;
      sc++;
    }
    suffix[j] = sc;
  }

  const ans = new Array<number>(n);
  for (let i = 0; i < n; i++) {
    ans[i] = prefix[i] - (i + 1 < n ? suffix[i + 1] : 0);
  }
  return ans;
}

export {};
