import { ListNode } from "@/utils";

function pairSum(head: ListNode | null): number {
  let slow = head;
  let fast = head;
  let prev: ListNode | null = null;

  while (fast?.next) {
    fast = fast.next.next ?? null;

    const next = slow!.next;

    slow!.next = prev;
    prev = slow;

    slow = next;
  }

  let ans = 0;
  while (prev && slow) {
    ans = Math.max(prev.val + slow.val, ans);
    prev = prev.next;
    slow = slow.next;
  }

  return ans;
}

export { pairSum };
