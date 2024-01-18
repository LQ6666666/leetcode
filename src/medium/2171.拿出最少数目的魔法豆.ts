// https://leetcode.cn/problems/removing-minimum-number-of-magic-beans/solutions/1262419/pai-xu-hou-yi-ci-bian-li-by-endlesscheng-36g8
function minimumRemoval(beans: number[]): number {
  beans.sort((a, b) => a - b);
  const n = beans.length;
  let sum = 0;
  let max = 0;
  for (let i = 0; i < n; i++) {
    const bean = beans[i];
    sum += bean;
    max = Math.max(max, (n - i) * bean);
  }
  return sum - max;
}

export {};
