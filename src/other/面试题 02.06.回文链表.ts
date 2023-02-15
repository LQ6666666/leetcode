import { ListNode } from "@/utils";

// 快慢指针
function isPalindrome(head: ListNode | null): boolean {
  let fast = head;
  let slow = head;

  while (fast) {
    slow = slow!.next;
    fast = fast.next?.next ?? null;
  }

  // 反转后半段
  let current = slow;
  let prev = null;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  slow = head;
  fast = prev;
  while (fast) {
    if (slow!.val !== fast.val) {
      return false;
    }

    fast = fast.next;
    slow = slow!.next;
  }

  return true;
}

export {};
