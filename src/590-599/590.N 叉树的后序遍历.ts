class Node {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

function postorder(root: Node | null): number[] {
  if (root === null) return [];

  const ret: number[] = [];

  for (const item of root.children) {
    ret.push(...postorder(item));
  }

  ret.push(root.val);

  return ret;
}

export { postorder };
