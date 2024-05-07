import { ListNode } from "@/utils";

function mergeNodes(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  const dummy = new ListNode();
  let current = dummy;

  // 第一个节点一定是 0
  let node = head.next;
  let sum = head.val;
  while (node) {
    if (node.val === 0) {
      const newNode = new ListNode(sum);
      current.next = newNode;
      current = newNode;
      sum = 0;
    } else {
      sum += node.val;
    }

    node = node.next;
  }

  return dummy.next;
}

export { mergeNodes };
