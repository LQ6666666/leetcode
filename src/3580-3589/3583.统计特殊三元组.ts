import { MOD } from "@/utils";

function specialTriplets(nums: number[]): number {
  const map = new Map<number, number>();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  const leftMap = new Map<number, number>();

  let ans = 0;
  for (const num of nums) {
    let target = num * 2;
    const leftCount = leftMap.get(target) ?? 0;
    leftMap.set(num, (leftMap.get(num) ?? 0) + 1);
    const rightCount = (map.get(target) ?? 0) - (leftMap.get(target) ?? 0);

    ans += (leftCount * rightCount) % MOD;
    ans %= MOD;
  }

  return ans;
}

export { specialTriplets };
