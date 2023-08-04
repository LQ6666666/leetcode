import { ListNode } from "@/utils";

function insertionSortList(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  /** 链表的已排序部分的最后一个节点 */
  let lastSorted: ListNode = head;
  let current: ListNode | null = head.next;

  while (current) {
    if (lastSorted.val <= current.val) {
      lastSorted = lastSorted.next!;
    } else {
      let prev = dummyHead;
      while (prev.next!.val <= current.val) {
        prev = prev.next!;
      }
      lastSorted.next = current.next;
      current.next = prev.next;
      prev.next = current;
    }
    current = lastSorted.next;
  }

  return dummyHead.next;
}

export {};
