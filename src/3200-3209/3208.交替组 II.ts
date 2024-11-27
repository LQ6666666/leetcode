function numberOfAlternatingGroups(colors: number[], k: number): number {
  const n = colors.length;
  let ans = 0;
  let count = 1;

  // 因为 count 初始值都是 1，要知道前面 k-1 块砖的交替情况，只需要前推 k-2 步
  for (let i = -k + 2; i < n; i++) {
    if (colors[(i + n) % n] !== colors[(i - 1 + n) % n]) {
      count++;
    } else {
      count = 1;
    }

    if (count >= k) {
      ans++;
    }
  }

  return ans;
}

export { numberOfAlternatingGroups };
