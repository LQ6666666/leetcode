import { TreeNode } from "@/utils";

function createBinaryTree(descriptions: number[][]): TreeNode | null {
  const map = new Map<number, TreeNode>();
  const set = new Set<number>(descriptions.map(([p]) => p));

  const n = descriptions.length;
  for (let i = 0; i < n; i++) {
    const [parent, child, isLeft] = descriptions[i];
    set.delete(child);

    let parentNode = map.get(parent);
    if (!parentNode) {
      map.set(parent, (parentNode = new TreeNode(parent)));
    }
    let childNode = map.get(child);
    if (!childNode) {
      map.set(child, (childNode = new TreeNode(child)));
    }
    parentNode[isLeft === 1 ? "left" : "right"] = childNode;
  }

  // 没有父节点的是跟节点
  return map.get(set.values().next().value!) ?? null;
}

export { createBinaryTree };
