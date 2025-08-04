function totalFruit(fruits: number[]): number {
  const n = fruits.length;

  const map = new Map<number, number>();
  let ans = 0;
  for (let left = 0, right = 0; right < n; right++) {
    map.set(fruits[right], (map.get(fruits[right]) ?? 0) + 1);

    // 超出两种了
    while (map.size > 2) {
      let count = map.get(fruits[left]) ?? 0;
      count--;
      if (count <= 0) {
        map.delete(fruits[left]);
      } else {
        map.set(fruits[left], count);
      }
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}

export { totalFruit };
