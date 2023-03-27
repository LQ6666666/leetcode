import { ListNode } from "@/utils";

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const head = new ListNode(-1);
  let current = head;

  let carry = 0;
  while (l1 || l2 || carry !== 0) {
    const a = l1?.val ?? 0;
    const b = l2?.val ?? 0;

    const sum = a + b + carry;
    current.next = new ListNode(sum % 10);
    current = current.next;
    carry = Math.floor(sum / 10);

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return head.next;
}

export { addTwoNumbers };
