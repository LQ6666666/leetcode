function totalFruit(fruits: number[]): number {
  const n = fruits.length;
  if (n === 0) return 0;

  let ans = 0;
  const map = new Map<number, number>();
  let left = 0,
    right = 0;

  while (right < n) {
    const fruit = fruits[right];
    setCount(fruit, getCount(fruit) + 1);

    // 超出两种了
    while (map.size > 2) {
      setCount(fruits[left], getCount(fruits[left]) - 1);
      left++;
    }

    ans = Math.max(ans, right - left + 1);
    right++;
  }

  return ans;

  function getCount(key: number) {
    return map.get(key) ?? 0;
  }

  function setCount(key: number, value: number) {
    if (value < 1) {
      return map.delete(key);
    } else {
      return map.set(key, value);
    }
  }
}

// console.log(totalFruit([1, 2, 1]));
console.log(totalFruit([0, 1, 2, 2]));

export { totalFruit };
