function smallestMissingValueSubtree(parents: number[], nums: number[]): number[] {
  const n = nums.length;
  const ans = new Array<number>(n).fill(1);

  let node = nums.indexOf(1);
  // 不存在基因值为 1 的点
  if (node < 0) ans;

  // 建树
  const g: number[][] = Array.from({ length: n }, (): number[] => []);
  for (let i = 1; i < n; i++) {
    g[parents[i]].push(i);
  }

  const vis = new Set<number>();

  // 缺失的最小基因值
  let mex = 2;
  while (node >= 0) {
    dfs(node);
    while (vis.has(mex)) {
      // node 子树包含这个基因值
      mex++;
    }
    // 缺失的最小基因值
    ans[node] = mex;
    // 往上走
    node = parents[node];
  }

  return ans;

  function dfs(x: number): void {
    vis.add(nums[x]);
    for (const son of g[x]) {
      if (!vis.has(nums[son])) {
        dfs(son);
      }
    }
  }
}

export { smallestMissingValueSubtree };
