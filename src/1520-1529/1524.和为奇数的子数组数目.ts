// 因为要求的是和为奇数的子数组数目
// 这种连续的和问题就让人想到前缀和，而子数组组对就让人想到哈希表
// 我们就构建一个数组来表示前面出现过的奇数个偶数的数目
// 当前和为偶数就和之前的奇数前缀和做差就能得到奇数
// 而当前为奇数就和之前的偶数配对，这样进行一个统计即可

import { MOD } from "@/utils";

function numOfSubarrays(arr: number[]): number {
  const n = arr.length;
  let ans = 0;
  let odd = 1;
  let even = 0;
  let prefixSum = 0;
  for (let i = 0; i < n; i++) {
    prefixSum += arr[i];
    if (prefixSum % 2 === 0) {
      ans += even;
      odd++;
    } else {
      ans += odd;
      even++;
    }
  }
  return ans % MOD;
}

export {};
