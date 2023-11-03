export class Node {
  constructor(
    public val: number = 0,
    public left: Node | null = null,
    public right: Node | null = null,
    public next: Node | null = null
  ) {}
}

function connect(root: Node | null): Node | null {
  // 层序遍历
  let queue: Node[] = [];
  if (root) {
    queue.push(root);
  }

  while (queue.length) {
    const newQueue: Node[] = [];
    let prev: Node | null = null;

    for (const node of queue) {
      if (prev !== null) {
        prev.next = node;
        prev = node;
      }
      prev = node;

      if (node.left) {
        newQueue.push(node.left);
      }

      if (node.right) {
        newQueue.push(node.right);
      }
    }

    queue = newQueue;
  }

  return root;
}

export { connect };
