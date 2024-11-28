function countDistinctIntegers(nums: number[]): number {
  const cached = new Set<number>(nums);

  for (const num of nums) {
    let result = 0;
    let x = num;
    while (x) {
      result = result * 10 + (x % 10);
      x = Math.floor(x / 10);
    }

    cached.add(result);
  }

  return cached.size;
}

function countDistinctIntegers1(nums: number[]): number {
  const set = new Set<number>(nums);

  for (const num of nums) {
    set.add(reverse(num));
  }

  return set.size;
}

const cached = new Map<number, number>();
function reverse(num: number): number {
  const existing = cached.get(num);
  if (existing !== undefined) return existing;

  let x = num;
  let result = 0;
  while (x) {
    result = result * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  cached.set(x, result);
  return result;
}

function countDistinctIntegers2(nums: number[]): number {
  const set = new Set<number>(nums);
  const visitor = new Set<number>();

  for (let x of nums) {
    if (visitor.has(x)) continue;
    visitor.add(x);

    let result = 0;
    while (x) {
      result = result * 10 + (x % 10);
      x = Math.floor(x / 10);
    }

    set.add(result);
  }

  return set.size;
}

export {};
