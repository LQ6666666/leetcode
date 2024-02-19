function goodsOrder(goods: string): string[] {
  goods = goods.split("").sort().join("");

  const n = goods.length;
  const ans: string[] = [];
  const paths: string[] = [];
  const set = new Set<number>();
  dfs();
  return ans;

  function dfs() {
    if (paths.length === n) {
      ans.push(paths.join(""));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (set.has(i)) {
        continue;
      }

      // 前提：排序
      // 如果有前一个数 && 当前数和前一个数相等 && 前一个数没被访问过
      // 上一个撤销的也是同样的数，可以剪枝
      if (i > 0 && goods[i] === goods[i - 1] && set.has(i - 1) === false) {
        continue;
      }

      set.add(i);
      paths.push(goods[i]);
      dfs();
      paths.pop();
      set.delete(i);
    }
  }
}

export { goodsOrder };
