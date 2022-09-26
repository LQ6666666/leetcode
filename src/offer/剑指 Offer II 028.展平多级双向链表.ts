class Node {
  val: number
  prev: Node | null
  next: Node | null
  child: Node | null
  constructor(val?: number, prev?: Node, next?: Node, child?: Node) {
    this.val = (val === undefined ? 0 : val);
    this.prev = (prev === undefined ? null : prev);
    this.next = (next === undefined ? null : next);
    this.child = (child === undefined ? null : child);
  }
}


function flatten1(head: Node | null): Node | null {
  const list: Node[] = [];

  dfs(head);

  let prev = list[0];

  for (let i = 1; i < list.length; i++) {
    const cur = list[i]
    cur.prev = prev;
    prev.next = cur;
    prev.child = null;
    prev = cur;
  }

  return head;

  function dfs(node: Node | null) {
    if (node === null) return;

    let currentNode: Node | null = node;
    while (currentNode) {
      list.push(currentNode);
      dfs(currentNode.child);
      currentNode = currentNode.next;
    }
  }
};

function flatten(head: Node | null) {
  const dfs = (node: Node | null): Node | null => {
    let cur = node;
    // 记录链表的最后一个节点
    let last: Node | null = null;

    while (cur !== null) {
      let next = cur.next;
      //  如果有子节点，那么首先处理子节点
      if (cur.child) {
        const childLast = dfs(cur.child);

        next = cur.next;
        //  将 node 与 child 相连
        cur.next = cur.child;
        cur.child.prev = cur;

        //  如果 next 不为空，就将 last 与 next 相连
        if (next != null) {
          if (childLast) {
            childLast.next = next;
          }

          next.prev = childLast;
        }

        // 将 child 置为空
        cur.child = null;
        last = childLast;
      } else {
        last = cur;
      }

      cur = next;
    }

    return last;
  }

  dfs(head);
  return head;
};

export { };
