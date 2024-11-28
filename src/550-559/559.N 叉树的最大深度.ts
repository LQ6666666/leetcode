class Node {
  val: number;
  children: Node[];
  constructor(val?: number, children?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
  }
}

function maxDepth(root: Node | null): number {
  if (root === null) return 0;
  let max = 0;
  for (const node of root.children) {
    max = Math.max(maxDepth(node), max);
  }
  return max + 1;
}

export { maxDepth };
