import { MOD } from "src/utils";

/**
 * nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
 * 变为
 * nums[i] - rev(nums[i]) == nums[j] - rev(nums[j])
 * 将 nums[i] - rev(nums[i]) 作为哈希表的键，统计每个键出现的次数
 * 最后计算每个键对应的值的组合数
 * n * ( n - 1 ) / 2 得到对子的总数
 */
function countNicePairs(nums: number[]): number {
  const map = new Map<number, number>();

  for (const num of nums) {
    const key = num - rev(num);
    map.set(key, (map.get(key) ?? 0) + 1);
  }

  let ans = 0;

  map.forEach(value => {
    ans += ((value * (value - 1)) / 2) % MOD;
  });

  return ans % MOD;
}

function rev(x: number): number {
  let ret = 0;
  while (x > 0) {
    ret = ret * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return ret;
}

export { countNicePairs };
