import { ListNode } from "../utils";

function swapPairs$(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  const next = head.next;
  head.next = swapPairs$(next.next);
  next.next = head;

  return next;
}

function swapPairs(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(-1, head);
  let current = dummy;

  while (current.next !== null && current.next.next !== null) {
    let p = current.next;
    let q = p.next!;

    current.next = q;
    p.next = q.next;
    q.next = p;

    current = p;
  }

  return dummy.next;
}
