import { ListNode } from "@/utils";

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  let sum = 0;
  let current = head;
  while (current) {
    sum += current.val;
    if (sum === 0) {
      return removeZeroSumSublists(current.next);
    }
    current = current.next;
  }

  if (head) {
    head.next = removeZeroSumSublists(head.next);
  }

  return head;
}

export {};
