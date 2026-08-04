function maxDiff(num: number): number {
  const nums: number[] = [];
  while (num) {
    nums.push(num % 10);
    num = Math.floor(num / 10);
  }
  let x = nums[nums.length - 1];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== 9) {
      x = nums[i];
      break;
    }
  }

  const a: number[] = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === x) {
      a.push(9);
    } else {
      a.push(nums[i]);
    }
  }

  x = -1;
  let y: number;
  if (nums[nums.length - 1] !== 1) {
    x = nums[nums.length - 1];
    y = 1;
  } else {
    y = 0;
    for (let i = nums.length - 2; i >= 0; i--) {
      if (nums[i] > 1) {
        x = nums[i];
        break;
      }
    }
  }

  const b: number[] = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === x) {
      b.push(y);
    } else {
      b.push(nums[i]);
    }
  }

  let max = 0;
  for (let i = 0; i < a.length; i++) {
    max = max * 10 + a[i];
  }
  let min = 0;
  for (let i = 0; i < b.length; i++) {
    min = min * 10 + b[i];
  }

  return max - min;
}

export {};
