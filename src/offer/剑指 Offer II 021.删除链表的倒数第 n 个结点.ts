import { ListNode } from "src/utils";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null) return null;

  let length = 0;
  let cur: ListNode | null = head;
  while(cur) {
    length++;
    cur = cur.next;
  }

  const pos = length - n;
  if (pos === 0) return head.next;

  cur = head;

  let index = 0;
  while (cur) {
    // 拿到上一个的位置
    if (++index === pos) {
      const next = cur.next?.next ?? null;
      cur.next = next;
      cur = null;
    } else {
      cur = cur.next;
    }
  }

  return head;
};

export { removeNthFromEnd };
