import { ListNode } from "@/utils";

function mergeNodes(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  const dummy = new ListNode();
  let current = dummy;
  let node: ListNode | null = head.next;
  let sum = 0;

  while (node) {
    if (node.val === 0) {
      const next = new ListNode(sum);
      current.next = next;
      current = next;
      sum = 0;
    } else {
      sum += node.val;
    }

    node = node.next;
  }

  return dummy.next;
}

export { mergeNodes };
