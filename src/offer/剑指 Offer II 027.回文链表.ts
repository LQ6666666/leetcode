import { ListNode } from "src/utils";

function isPalindrome(head: ListNode | null): boolean {
  if (head === null || head.next === null) return true;

  // 1.找到中间节点
  let slow: ListNode | null = head;
  let fast: ListNode | null = slow;

  while (fast?.next) {
    slow = slow.next!;
    fast = fast.next.next ?? null;
  }

  // 2.反转后面的节点
  let prev = null
  while (slow) {
    const next: ListNode | null = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // 3.依次对比
  slow = head;
  fast = prev;

  while (slow && fast) {
    if (slow?.val !== fast?.val) {
      return false
    }

    slow = slow?.next ?? null;
    fast = fast?.next ?? null;
  }

  return true;
};

export { isPalindrome };
