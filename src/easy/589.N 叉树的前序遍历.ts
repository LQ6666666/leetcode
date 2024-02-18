class Node {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

function preorder(root: Node | null): number[] {
  if (root === null) return [];

  const ret = [root.val];

  for (const item of root.children) {
    ret.push(...preorder(item));
  }

  return ret;
}

export { preorder };
