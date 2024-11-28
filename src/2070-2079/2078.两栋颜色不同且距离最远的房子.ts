function maxDistance(colors: number[]): number {
  const n = colors.length;
  let i = 0;
  let j = n - 1;

  // 以 [1, 1, 1, 6, 1, 1, 1] 举例来分析 j 走到了 6 元素所在的位置
  while (colors[0] === colors[j]) {
    j--;
  }

  // i 也走到了 6 元素所在的位置 前面头部和后面尾部是同一个颜色 那就看前面头部长一些还是后面发问长一些
  while (colors[n - 1] === colors[i]) {
    i++;
  }

  // 尾部元素的个数 n - 1 - i  头部元素的个数 j
  return Math.max(n - 1 - i, j);
}

export {};
