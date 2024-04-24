import { TreeNode } from "@/utils";

function amountOfTime$(root: TreeNode | null, start: number): number {
  // 根据每个点的关联关系，建立图
  const g = new Map<number, number[]>();
  dfs(root, null);

  const startRelation = g.get(start);
  const vis = new Map<number, boolean>();
  vis.set(start, true);

  let queue: number[] = startRelation ? startRelation : [];
  let ans = 0;

  while (queue.length) {
    ans++;

    const nextQueue: number[] = [];
    for (const node of queue) {
      vis.set(node, true);

      const val = g.get(node);
      if (val) {
        for (const item of val) {
          if (!vis.get(item)) {
            nextQueue.push(item);
          }
        }
      }
    }

    queue = nextQueue;
  }

  return ans;

  function dfs(node: TreeNode | null, from: TreeNode | null) {
    if (node === null) return;

    const relation: number[] = [];
    if (node.left) {
      dfs(node.left, node);
      relation.push(node.left.val);
    }
    if (node.right) {
      dfs(node.right, node);
      relation.push(node.right.val);
    }

    from && relation.push(from.val);
    g.set(node.val, relation);
  }
}

function amountOfTime(root: TreeNode | null, start: number): number {
  const map = new Map<number, number[]>();
  dfs(root, null);

  const visitSet = new Set<number>();
  let queue: number[] = [];

  let ans = 0;
  if (map.has(start)) {
    queue = map.get(start)!;
    visitSet.add(start);
  }

  while (queue.length) {
    const newQueue: number[] = [];

    for (const x of queue) {
      visitSet.add(x);

      const list = map.get(x) ?? [];
      list.forEach(y => {
        if (!visitSet.has(y)) {
          newQueue.push(y);
        }
      });
    }

    ans++;
    queue = newQueue;
  }

  return ans;

  function dfs(node: TreeNode | null, from: number | null) {
    if (node === null) return;

    let list = map.get(node.val);
    if (!list) {
      map.set(node.val, (list = []));
    }
    if (from !== null) {
      list.push(from);
    }
    if (node.left) {
      dfs(node.left, node.val);
      list.push(node.left.val);
    }
    if (node.right) {
      dfs(node.right, node.val);
      list.push(node.right.val);
    }
  }
}
