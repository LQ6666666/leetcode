import { MOD } from "@/utils";

function countWays(ranges: number[][]): number {
  const n = ranges.length;
  ranges.sort(([a], [b]) => a - b);

  let count = 0;
  let maxRange = ranges[0][1];
  for (let i = 1; i < n; i++) {
    const range = ranges[i];
    if (range[0] > maxRange) {
      count++;
    }
    maxRange = Math.max(range[1], maxRange);
  }

  let ans = 1;
  while (count-- >= 0) {
    ans = (ans * 2) % MOD;
  }
  return ans;
}

export {};
