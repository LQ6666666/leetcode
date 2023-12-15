import { TreeNode } from "src/utils";

function reverseOddLevels$(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;

  dfs(root.left, root.right);
  return root;
}

function dfs(l: TreeNode | null, r: TreeNode | null, depth: number = 1) {
  if (l === null) return null;

  if (depth % 2 !== 0) {
    let temp = l.val;
    l.val = r?.val ?? -1;
    r!.val = temp;
  }

  dfs(l.left, r?.right ?? null, depth + 1);
  dfs(l.right, r?.left ?? null, depth + 1);
}

function reverseOddLevels$$(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;

  let queue: TreeNode[] = [root];
  let depth = 1;

  while (queue.length) {
    const nextQueue: TreeNode[] = [];
    for (const node of queue) {
      if (node.left) {
        nextQueue.push(node.left);
      }

      if (node.right) {
        nextQueue.push(node.right);
      }
    }

    if (depth % 2 !== 0) {
      const nodeValues = nextQueue.map(node => node.val).reverse();
      for (let i = 0; i < nodeValues.length; i++) {
        nextQueue[i].val = nodeValues[i];
      }
    }

    depth++;
    queue = nextQueue;
  }

  return root;
}

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
  let queue = root ? [root] : [];
  let depth = 1;

  while (queue.length) {
    const nextQueue: TreeNode[] = [];

    for (const node of queue) {
      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    }

    if (depth % 2 !== 0) {
      const values = nextQueue.map(node => node.val).reverse();
      for (let i = 0; i < nextQueue.length; i++) {
        nextQueue[i].val = values[i];
      }
    }

    queue = nextQueue;
    depth++;
  }

  return root;
}

export { reverseOddLevels };
