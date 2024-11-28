import { ListNode } from "@/utils";

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  let current = head;
  while (current && current.next) {
    const next = current.next;
    const node = new ListNode(gcd(current.val, current.next.val));
    current.next = node;
    node.next = next;
    current = next;
  }

  return head;
}

function gcd(a: number, b: number) {
  for (let i = a; i >= 2; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
  return 1;
}

export {};
