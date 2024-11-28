function maxNumberOfAlloys(
  n: number,
  k: number,
  budget: number,
  composition: number[][],
  stock: number[],
  cost: number[]
): number {
  let ans = 0;
  for (let i = 0; i < k; i++) {
    ans = Math.max(ans, binarySearch(composition[i]));
  }

  return ans;

  function binarySearch(composition: number[]) {
    let left = 0,
      right = budget + Math.max(...stock);
    let result = 0;

    while (left <= right) {
      const middle = left + ((right - left) >> 1);

      let val = 0;
      for (let i = 0; i < n; i++) {
        if (stock[i] < composition[i] * middle) {
          val += (composition[i] * middle - stock[i]) * cost[i];
        }
      }

      if (val <= budget) {
        result = middle;
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    return result;
  }
}

export { maxNumberOfAlloys };
