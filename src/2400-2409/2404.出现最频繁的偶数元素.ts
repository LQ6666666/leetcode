function $mostFrequentEven(nums: number[]): number {
  const map = new Map<number, number>();
  for (const num of nums) {
    if (num % 2 === 0) {
      map.set(num, (map.get(num) ?? 0) + 1);
    }
  }

  if (map.size === 0) return -1;

  const keys = Array.from(map.keys());
  // value 从大向小，key 从小向大
  keys.sort((a, b) => {
    const x = map.get(a)!;
    const y = map.get(b)!;
    if (x === y) {
      return a - b;
    } else {
      return y - x;
    }
  });

  return keys.at(0)!;
}

function mostFrequentEven(nums: number[]): number {
  const map = new Map<number, number>();
  for (const num of nums) {
    if (num % 2 === 0) {
      map.set(num, (map.get(num) ?? 0) + 1);
    }
  }

  let ans = -1;
  let count = 0;
  map.forEach((value, key) => {
    if (ans === -1 || value > count || (value === count && key < ans)) {
      ans = key;
      count = value;
    }
  });

  return ans;
}

export {};
