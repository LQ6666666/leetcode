import { ListNode } from "@/utils";

function reverseEvenLengthGroups(head: ListNode | null): ListNode | null {
  let size = 1;
  let node = head;
  let prev: ListNode | null = null;

  let totalSize = 0;
  let current = head;
  // 记录总数
  while (current) {
    totalSize++;
    current = current.next;
  }

  while (node) {
    const currentSize = totalSize < size ? totalSize : size;
    totalSize -= size;

    if (currentSize % 2 === 0) {
      let head = node;

      let pp: ListNode | null = null;
      let current: ListNode | null = node;
      for (let i = 0; current && i < size; i++) {
        const next: ListNode | null = current.next;
        current.next = pp;
        pp = current;
        current = next;
      }

      if (prev) {
        prev.next = pp;
      }

      head.next = current;
      prev = head;
      node = head.next;
    } else {
      for (let i = 0; node && i < size; i++) {
        prev = node;
        node = node.next;
      }
    }

    size++;
  }

  return head;
}

export { reverseEvenLengthGroups };
