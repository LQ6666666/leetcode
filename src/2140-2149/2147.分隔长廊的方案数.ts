import { MOD } from "@/utils";

function numberOfWays(corridor: string): number {
  const n = corridor.length;
  let ans = 1;
  let lastS = -1;
  let countS = 0;
  for (let i = 0; i < n; i++) {
    if (corridor[i] === "S") {
      countS++;

      if (countS >= 3 && countS % 2 !== 0) {
        ans = (ans * (i - lastS)) % MOD;
      }

      lastS = i;
    }
  }

  if (countS === 0 || countS % 2 !== 0) {
    return 0;
  }

  return ans;
}

export {};
