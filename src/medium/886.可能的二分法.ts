// https://leetcode.cn/problems/possible-bipartition/

/**
 * 我们可以尝试用「染色法」来解决问题：假设第一组中的人是红色，第二组中的人为蓝色。
 * 我们依次遍历每一个人，如果当前的人没有被分组，就将其分到第一组（即染为红色），
 * 那么这个人不喜欢的人必须分到第二组中（染为蓝色）。
 * 然后任何新被分到第二组中的人，其不喜欢的人必须被分到第一组，依此类推。
 * 如果在染色的过程中存在冲突，就表示这个任务是不可能完成的，
 * 否则说明染色的过程有效（即存在合法的分组方案）。
 */

function possibleBipartition(n: number, dislikes: [number, number][]) {
  const color = new Array<number>(n + 1).fill(0);
  const g = new Array<number[]>(n + 1);
  for (let i = 0; i <= n; i++) {
    g[i] = [];
  }

  for (const [a, b] of dislikes) {
    g[a].push(b);
    g[b].push(a);
  }

  for (let i = 1; i <= n; i++) {
    if (color[i] === 0 && !dfs(i, 1)) {
      return false;
    }
  }

  return true;

  function dfs(curNode: number, nowColor: number) {
    color[curNode] = nowColor;

    for (const nextNode of g[curNode]) {
      if (color[nextNode] !== 0 && color[nextNode] === color[curNode]) {
        return false;
      }

      if (color[nextNode] === 0 && !dfs(nextNode, 3 ^ nowColor)) {
        return false;
      }
    }

    return true;
  }
}

export { possibleBipartition };
