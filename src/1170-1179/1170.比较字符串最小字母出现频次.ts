function numSmallerByFrequency$(queries: string[], words: string[]): number[] {
  const n = queries.length;
  const m = words.length;

  const ans = new Array<number>(n).fill(0);
  const fws = words.map(f);
  fws.sort((a, b) => b - a);

  for (let i = 0; i < n; i++) {
    const fq = f(queries[i]);
    for (let j = 0; j < m; j++) {
      if (fq < fws[j]) {
        ans[i]++;
      } else {
        break;
      }
    }
  }

  return ans;
}

// 二分优化
function numSmallerByFrequency(queries: string[], words: string[]): number[] {
  const n = queries.length;
  const m = words.length;

  const ans = new Array<number>(n).fill(0);
  const fws = words.map(f);
  fws.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    const fq = f(queries[i]);
    // 寻找第一个大于 fq 的
    const index = binarySearch(fws, fq);
    ans[i] = m - index;
  }

  return ans;
}

function binarySearch(arr: number[], target: number) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const middle = left + ((right - left) >> 1);
    if (arr[middle] <= target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return left;
}

function f(s: string): number {
  const counts = new Array<number>(26).fill(0);
  for (const ch of s) {
    counts[ch.charCodeAt(0) - 97]++;
  }
  for (const count of counts) {
    if (count > 0) return count;
  }
  return 0;
}

export {};
