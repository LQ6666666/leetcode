function threeSum$(nums: number[]): number[][] {
  if (nums.length < 3) {
    return [];
  }

  nums = nums.sort((a, b) => a - b);

  const set = new Set<number>();
  const map = new Map<string, number[]>();

  const length = nums.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      const a = nums[i],
        b = nums[j];
      // 计算出 c
      const c = 0 - (a + b);

      if (set.has(c)) {
        const value = [a, b, c].sort((a, b) => a - b);
        const key = value.toString();
        map.set(key, value);
      }
    }

    set.add(nums[i]);
  }

  const ans = new Array(map.size);
  const mapIterator = map.values();

  let i = 0;
  while (i < map.size) {
    ans[i++] = mapIterator.next().value;
  }

  return ans;
}

// 双指针
function threeSum$$(nums: number[]): number[][] {
  const ans: number[][] = [];
  const n = nums.length;
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    const a = nums[i];
    // 因为是按升序，当前大于 0 后面就都大于 0
    if (a > 0) return ans;

    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = n - 1;
    while (right > left) {
      const b = nums[left];
      const c = nums[right];
      const sum = a + b + c;

      if (sum === 0) {
        ans.push([a, b, c]);

        // 去重逻辑：防止有连续的数组重复
        while (right > left && nums[right] === nums[right - 1]) right--;
        while (right > left && nums[left] === nums[left + 1]) left++;

        // 找到答案时，双指针同时收缩
        right--;
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return ans;
}

function threeSum(nums: number[]): number[][] {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  const ans: number[][] = [];

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (num > 0) return ans;

    if (i > 0 && num === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const leftNum = nums[left];
      const rightNum = nums[right];
      const sum = num + leftNum + rightNum;

      if (sum === 0) {
        ans.push([num, leftNum, rightNum]);
        while (left < right && nums[left] === leftNum) left++;
        while (left < right && nums[right] === rightNum) right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return ans;
}

export {};
