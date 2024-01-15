import { ListNode } from "../utils";

function deleteDuplicates$(head: ListNode | null): ListNode | null {
  if (head === null) return head;

  const newHead = new ListNode(0);
  let t = newHead;

  let cur: ListNode | null = head;

  while (cur) {
    let flag: ListNode = cur;
    while (cur.val === cur.next?.val) {
      cur = cur.next;
    }

    if (flag === cur) {
      t.next = cur;
      t = t.next;
    }

    cur = cur.next;
  }

  t.next = null;
  return newHead.next;
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  const dummy = new ListNode(0, head);
  let current = dummy;

  while (current.next && current.next.next) {
    const x = current.next.val;
    if (x === current.next.next.val) {
      while (x === current.next?.val) {
        current.next = current.next.next;
      }
    } else {
      current = current.next;
    }
  }

  return dummy.next;
}

export { deleteDuplicates };
