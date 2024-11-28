import { ListNode } from "../utils";

function addTwoNumbers$(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const root = new ListNode(0);
  let cursor = root;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const val1: number = l1?.val ?? 0;
    const val2: number = l2?.val ?? 0;
    const sumVal = val1 + val2 + carry;

    carry = sumVal >= 10 ? 1 : 0;

    const sumNode = new ListNode(sumVal % 10);
    cursor.next = sumNode;
    cursor = sumNode;

    l1 &&= l1.next;
    l2 &&= l2.next;
  }

  return root.next;
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const head = new ListNode(-1);
  let cursor = head;

  let carry = 0;

  while (l1 || l2 || carry !== 0) {
    const a = l1?.val ?? 0;
    const b = l2?.val ?? 0;

    const sum = a + b + carry;
    carry = sum >= 10 ? 1 : 0;
    const node = new ListNode(sum % 10);
    cursor.next = node;
    cursor = node;

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return head.next;
}

export { addTwoNumbers };
