// 额外数组
function merge$(nums1: number[], m: number, nums2: number[], n: number): void {
  if (n === 0) return;
  const len = m + n;
  const sorted = new Array(len);

  let n1 = 0,
    n2 = 0;
  let i = 0;

  while (i < len) {
    const num1 = n1 < m ? nums1[n1] : Infinity;
    const num2 = n2 < n ? nums2[n2] : Infinity;

    if (num1 <= num2) {
      sorted[i] = nums1[n1++];
    } else {
      sorted[i] = nums2[n2++];
    }
    i++;
  }

  i = 0;
  for (; i < len; i++) {
    nums1[i] = sorted[i];
  }
}

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1,
    p2 = n - 1,
    p = m + n - 1;

  while (p2 >= 0) {
    // nums2 还有要合并的元素
    // 如果 p1 < 0，那么走 else 分支，把 nums2 合并到 nums1 中
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      // 填入 nums1[p1]
      nums1[p--] = nums1[p1--];
    } else {
      // 填入 nums2[p2]
      nums1[p--] = nums2[p2--];
    }
  }
}

export {};
