import { ListNode } from "@/utils";

function doubleIt(head: ListNode | null): ListNode | null {
  head = reverse(head);
  let carry = 0;
  const d = new ListNode();
  let current = d;
  while (head !== null || carry !== 0) {
    let num = carry;
    if (head) {
      num += head.val * 2;
      head = head.next;
    }
    const node = new ListNode(num % 10);
    current.next = node;
    current = node;
    carry = Math.floor(num / 10);
  }
  return reverse(d.next);
}

function reverse(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current = head;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

export { doubleIt };
