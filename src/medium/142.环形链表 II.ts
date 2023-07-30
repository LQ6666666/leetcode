import { ListNode } from "@/utils";

function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return null;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (slow && fast) {
    slow = slow.next;
    fast = fast.next?.next ?? null;

    if (slow === fast) {
      while (slow !== head) {
        slow = slow?.next ?? null;
        head = head?.next ?? null;
      }
      return slow;
    }
  }

  // 链表中没有环
  return null;
}

export { detectCycle };
