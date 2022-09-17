import { ListNode } from "src/utils";

function reorderList(head: ListNode | null): void {
  if (head === null || head.next === null) return;

  // 找到中间的节点
  const midNode = getMidNode(head);
  let l1: ListNode | null = head;
  let l2: ListNode | null = midNode?.next ?? null;

  if (midNode) midNode.next = null;

  // 反转后面的节点
  l2 = reverseNode(l2);

  while (l1 && l2) {
    const l1_tmp: ListNode | null = l1.next;
    const l2_tmp: ListNode | null = l2.next;

    l1.next = l2;
    l1 = l1_tmp;

    l2.next = l1;
    l2 = l2_tmp;
  }
};

function getMidNode(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast?.next) {
    slow = slow!.next;
    fast = fast.next?.next ?? null;
  }

  return slow;
}

function reverseNode(head: ListNode | null) {
  let prev: ListNode | null = null;
  let cur: ListNode | null = head;

  while (cur) {
    const next: ListNode | null = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
}

export { reorderList };
