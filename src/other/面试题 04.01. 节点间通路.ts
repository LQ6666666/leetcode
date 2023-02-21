function findWhetherExistsPath(
  n: number,
  graph: number[][],
  start: number,
  target: number
): boolean {
  // 建图
  const map = new Map<number, Set<number>>();
  // 路径是双向的
  for (const [src, dest] of graph) {
    const srcPath = map.get(src) ?? new Set();
    srcPath.add(dest);
    map.set(src, srcPath);
    const destPath = map.get(dest) ?? new Set();
    srcPath.add(src);
    map.set(dest, destPath);
  }

  function dfs(form: number): boolean {
    if (form === target) return true;

    const paths = Array.from(map.get(form)!);
    return paths.some(path => {
      if (path === form) return false;
      return dfs(path);
    });
  }

  return dfs(start);
}

function findWhetherExistsPath1(
  n: number,
  graph: number[][],
  start: number,
  target: number
): boolean {
  // 建图
  const map = new Map<number, Set<number>>();
  // 路径是双向的
  for (const [src, dest] of graph) {
    const srcPath = map.get(src) ?? new Set();
    srcPath.add(dest);
    map.set(src, srcPath);
    const destPath = map.get(dest) ?? new Set();
    srcPath.add(src);
    map.set(dest, destPath);
  }

  let queue = [start];
  const visits = new Array<boolean>(n).fill(false);

  while (queue.length) {
    const newQueue: number[] = [];

    for (const path of queue) {
      if (path === target) return true;

      if (visits[path]) continue;
      newQueue.push(...map.get(path)!);
      visits[path] = true;
    }
    queue = newQueue;
  }

  return false;
}

export { findWhetherExistsPath };
