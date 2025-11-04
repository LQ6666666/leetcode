function findXSum(nums: number[], k: number, x: number): number[] {
  const n = nums.length;

  const ans: number[] = [];
  const map = new Array<number>(51).fill(0);
  for (let i = 0, j = 0; j < n; j++) {
    map[nums[j]]++;

    while (j - i > k - 1) {
      map[nums[i]]--;
      i++;
    }

    if (j - i === k - 1) {
      const arr: number[] = [];
      for (let i = 0; i < 51; i++) {
        if (map[i] > 0) {
          arr.push(i);
        }
      }
      ans.push(
        arr
          .sort((a, b) => {
            if (map[b] === map[a]) {
              return b - a;
            } else {
              return map[b] - map[a];
            }
          })
          .slice(0, x)
          .reduce((memo, num) => memo + num * map[num], 0)
      );
    }
  }

  return ans;
}

export { findXSum };
