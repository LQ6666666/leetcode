import { ListNode } from "@/utils";

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
  const set = new Set(nums);
  const dummy = new ListNode(-1);
  let current: ListNode | null = dummy;

  let node = head;
  while (node) {
    const next = node.next;
    if (!set.has(node.val)) {
      current.next = node;
      current = node;
      node.next = null;
    }
    node = next;
  }

  return dummy.next;
}

export { modifiedList };
