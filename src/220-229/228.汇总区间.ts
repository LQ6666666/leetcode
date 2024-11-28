function summaryRanges$(nums: number[]): string[] {
  function formatter(a: number, b: number) {
    if (a === b) {
      return `${start}`;
    } else {
      return `${start}->${prev}`;
    }
  }

  const len = nums.length;
  const ans: string[] = [];
  if (len === 0) return ans;

  let start = nums[0];
  let prev = start;
  for (let i = 1; i < len; i++) {
    if (nums[i] - prev > 1) {
      ans.push(formatter(start, prev));
      start = nums[i];
    }

    prev = nums[i];
  }

  ans.push(formatter(start, prev));
  return ans;
}

function summaryRanges(nums: number[]): string[] {
  const n = nums.length + 1;

  const ans: string[] = [];
  let range: number[] = [];
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (range.length === 0) {
      range.push(num);
    } else if (range.at(-1)! === num - 1) {
      range.push(num);
    } else {
      if (range.length === 1) {
        ans.push(`${range.at(0)!}`)
      } else {
        ans.push(`${range.at(0)!}->${range.at(-1)!}`)
      }

      range = [num];
    }
  }

  return ans;
}

export {};
