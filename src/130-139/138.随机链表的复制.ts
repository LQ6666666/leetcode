class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;
  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: _Node | null): _Node | null {
  const map = new Map<_Node, _Node>();
  let node = head;
  while (node) {
    map.set(node, new _Node(node.val));
    node = node.next;
  }

  let copyHead = new _Node();
  let copy = copyHead;
  node = head;
  while (node) {
    copy.next = map.get(node)!;
    if (node.random) {
      copy.next.random = map.get(node.random)!;
    }
    copy = copy.next;
    node = node.next;
  }
  return copyHead.next;
}

export {};
