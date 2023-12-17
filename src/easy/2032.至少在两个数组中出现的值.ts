function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
  const map = new Map<number, number>();

  for (const num of nums1) {
    map.set(num, (map.get(num) ?? 0) | 0b1);
  }

  for (const num of nums2) {
    map.set(num, (map.get(num) ?? 0) | 0b10);
  }

  for (const num of nums3) {
    map.set(num, (map.get(num) ?? 0) | 0b100);
  }

  let ans: number[] = [];
  map.forEach((value, key) => {
    let x = value;
    let i = 0;
    let count = 0;
    while (i < 4) {
      if (x & (1 << i++)) {
        count++;
      }
    }
    if (count > 1) {
      ans.push(key);
    }
  });

  return ans;
}

export { twoOutOfThree };
