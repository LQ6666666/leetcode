class Node {
  val: number;
  next: Node | null;
  constructor(val?: number, next?: Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function insert(head: Node | null, insertVal: number): Node | null {
  const node = new Node(insertVal);
  if (head === null) {
    node.next = node;
    return node;
  }

  if (head.next === head) {
    head.next = node;
    node.next = head;
    return head;
  }

  let current: Node | null = head;
  let next: Node | null = head.next;
  while (next !== head && next && current) {
    if (insertVal >= current.val && insertVal <= next.val) {
      break;
    }

    if (current.val > next.val) {
      if (insertVal > current.val || insertVal < next.val) {
        break;
      }
    }
    current = current.next;
    next = next.next;
  }

  if (current) {
    current.next = node;
  }

  node.next = next;
  return head;
}

export {};
