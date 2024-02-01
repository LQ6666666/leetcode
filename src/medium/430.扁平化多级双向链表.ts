class Node {
  val: number;
  prev: Node | null;
  next: Node | null;
  child: Node | null;
  constructor(val?: number, prev?: Node, next?: Node, child?: Node) {
    this.val = val === undefined ? 0 : val;
    this.prev = prev === undefined ? null : prev;
    this.next = next === undefined ? null : next;
    this.child = child === undefined ? null : child;
  }
}

function flatten(head: Node | null): Node | null {
  if (head === null) return null;

  let current: Node | null = head;

  while (current) {
    const child = flatten(current.child);
    current.child = null;
    const childTail = getTailNode(child);

    const next: Node | null = current.next;
    if (child) {
      current.next = child;
      child.prev = current;

      childTail!.next = next;
      if (next) {
        next.prev = childTail;
      }
    }

    current = next;
  }

  return head;
}

function getTailNode(node: Node | null): Node | null {
  let tail: Node | null = node;
  while (node) {
    tail = node;
    node = node.next;
  }
  return tail;
}

export {};
