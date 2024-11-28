import { MOD } from "@/utils";

function sumCounts(nums: number[]): number {
  const n = nums.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    const set = new Set<number>();
    for (let j = i; j < n; j++) {
      set.add(nums[j]);
      ans = (ans + set.size * set.size) % MOD;
    }
  }

  return ans;
}

export { sumCounts };
