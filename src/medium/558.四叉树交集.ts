class Node {
  constructor(
    public val: boolean = false,
    public isLeaf: boolean = false,
    public topLeft: Node | null = null,
    public topRight: Node | null = null,
    public bottomLeft: Node | null = null,
    public bottomRight: Node | null = null
  ) {}
}

function intersect(quadTree1: Node, quadTree2: Node): Node | undefined {
  if (quadTree1.isLeaf) {
    if (quadTree1.val) {
      return new Node(true, true);
    }
    return new Node(
      quadTree2.val,
      quadTree2.isLeaf,
      quadTree2.topLeft,
      quadTree2.topRight,
      quadTree2.bottomLeft,
      quadTree2.bottomRight
    );
  }

  if (quadTree2.isLeaf) {
    return intersect(quadTree2, quadTree1);
  }

  const o1 = intersect(quadTree1.topLeft!, quadTree2.topLeft!);
  const o2 = intersect(quadTree1.topRight!, quadTree2.topRight!);
  const o3 = intersect(quadTree1.bottomLeft!, quadTree2.bottomLeft!);
  const o4 = intersect(quadTree1.bottomRight!, quadTree2.bottomRight!);
  // 如果当前网格的值相同（即，全为 0 或者全为 1）
  // 将 isLeaf 设为 True ，将 val 设为网格相应的值
  // 并将四个子节点都设为 Null 然后停止
  if (
    o1!.isLeaf &&
    o2!.isLeaf &&
    o3!.isLeaf &&
    o4!.isLeaf &&
    o1!.val === o2!.val &&
    o1!.val === o3!.val &&
    o1!.val === o4!.val
  ) {
    return new Node(o1!.val, true);
  }
  // 如果当前网格的值不同
  // 将 isLeaf 设为 False， 将 val 设为任意值
  // 将当前网格划分为四个子网格
  return new Node(false, false, o1, o2, o3, o4);
}

export { intersect };
