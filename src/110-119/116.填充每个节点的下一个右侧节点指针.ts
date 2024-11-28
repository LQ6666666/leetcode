class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;
  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

function connect(root: Node | null): Node | null {
  let queue: Node[] = root === null ? [] : [root];

  while (queue.length) {
    let newQueue: Node[] = [];
    let prev: Node | null = null;

    for (const node of queue) {
      if (prev) prev.next = node;

      prev = node;
      node.next = null;

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
