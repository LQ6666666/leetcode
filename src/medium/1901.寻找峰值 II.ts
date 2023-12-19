function findPeakGrid(mat: number[][]): number[] {
  const m = mat.length;

  let left = 0,
    right = m - 2;
  while (left <= right) {
    const i = left + ((right - left) >> 2);
    const j = indexOfMax(mat[i]);
    if (mat[i][j] <= mat[i + 1][j]) {
      left = i + 1;
    } else {
      right = i - 1;
    }
  }

  return [left, indexOfMax(mat[left])];
}

function indexOfMax(arr: number[]) {
  const n = arr.length;
  let index = 0;
  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[index]) {
      index = i;
    }
  }
  return index;
}

/**
 *
https://leetcode.cn/problems/find-a-peak-element-ii/solutions/2571587/tu-jie-li-yong-xing-zui-da-zhi-pan-duan-r4e0n/?envType=daily-question&envId=2023-12-19
相邻格子的值都不相同, 且边缘可视作为-1
对于某一行, 找到其最大值 maxA, 可知其大于等于 A 行中任意元素 eleA, 如果其小于其上下某个相邻值 eleB, 可知 eleB > maxA >= eleA
设 B 行中最大值为 maxB, 即 maxB >= eleB > maxA >= eleA 可得 maxB > eleA, 即作为 B 行最大值的maxB, 必然大于同行左右相邻元素, 且必然大于邻行A的同列元素
不断二分找到各行最大值的某个峰值即为答案
 */

export { findPeakGrid };
