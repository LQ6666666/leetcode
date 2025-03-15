import { ListNode } from "@/utils";

function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head?.next) return null;

  let fast: ListNode | null = head;
  let slow: ListNode | null = head;
  let prev: ListNode | null = null;
  while (fast?.next) {
    prev = slow!;
    slow = prev.next;
    fast = fast.next.next;
  }

  if (prev && slow) {
    prev.next = slow.next;
    slow.next = null;
  }

  return head;
}

export { deleteMiddle };
