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
      // 从头寻找插入的位置
      let prev = dummyHead;
      // 找到大于当前的节点
      while (prev.next!.val <= current.val) {
        prev = prev.next!;
      }
      // 指向下一个节点
      lastSorted.next = current.next;
      // 指向插入的位置后一个节点
      current.next = prev.next;
      // 指向插入的节点
      prev.next = current;
    }
    // 下一轮
    current = lastSorted.next;
  }

  return dummyHead.next;
}

export {};
