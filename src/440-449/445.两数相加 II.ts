import { ListNode } from "@/utils";

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  l1 = reverse(l1);
  l2 = reverse(l2);

  const head = new ListNode(-1);
  let current = head;
  let curry = 0;
  while (l1 || l2 || curry !== 0) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + curry;
    curry = sum >= 10 ? 1 : 0;
    const node = new ListNode(sum % 10);
    current.next = node;
    current = node;

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return reverse(head.next);
}

function reverse(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

export { addTwoNumbers };
