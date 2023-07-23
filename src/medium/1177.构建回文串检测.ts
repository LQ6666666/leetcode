import { hammingWeight } from "@/easy/191.位1的个数";

// 1.因为都是小写字母，并且可以重排序，所以判断回文数的方法可以是统计区间内，26个字母的个数，若是只有一个或者零个字母是奇数个，则此区间就是回文数
// 2.改变 k 个字符之后，变成回文数，区间内可以最多有 2 * k + 1 个字符是奇数个，即奇数字母个数 n <= 2 * k + 1
// 3.所以可以用前缀和，创建数组 arr arr[i] 表示 从 str[0] 到 str[i] 中每个字符出现的次数，若想统计 a 到 b 的区间中字符的个数，则可以用 arr[a] - arr[b - 1]
// 4.现在的问题变成了，怎么高效的记录前缀和。从上面的解析，不难看出，我们无需知道每个字符的个数，只需要知道每个字符是奇数个，还是偶数个
// 5.所以我们可以用一个 int 型的数字，来记录每个字符的奇偶数，int 型有 32 位，小写字母只有 26 个，我们可以定义一种映射， 用 int 的后 26 位来记录 26 个字符的奇偶性。
//   1 代表奇数个，0 代表偶数个
//     "ab" -> 00000000000000000000000000000011
//     "bc" -> 00000000000000000000000000000110
//   "bcaa" -> 00000000000000000000000000000110
//   并且用异或，可以模拟求差值， 前缀和的求取就是用异或
// 6.当我们需要求 a 到 b 的区间中字符的奇偶性时，只需要 int c = arr[a] ^ arr[b - 1] 即可。c 的二进制中1的个数，就是 a 到 b 的区间中奇数字符的个数
// 7. {rootDir}/src/easy/191.位1的个数.ts
function canMakePaliQueries(s: string, queries: number[][]): boolean[] {
  const n = s.length;
  const prefixSum = new Array<number>(n);
  prefixSum[0] = 0;
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] ^ (1 << (s[i].charCodeAt(0) - 97));
  }

  const m = queries.length;
  const ans = new Array<boolean>(m);
  for (let i = 0; i < m; i++) {
    const [left, right, k] = queries[i];
    // a 到 b 的区间中字符的奇偶性时
    const x = prefixSum[right + 1] ^ prefixSum[left];
    // 1 的个数
    const bits = hammingWeight(x);
    ans[i] = bits <= k * 2 + 1;
  }

  return ans;
}

export {};
