import { ListNode } from "@/utils";

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  // 1.计算数组长度
  let size = 0;
  let cur = head;
  while (cur) {
    size++;
    cur = cur.next;
  }

  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  // 2. k 个一组翻转
  cur = head;
  let prev = dummyHead;
  // 翻转次数
  for (let i = 0; i <= size - k; i += k) {
    const [head, next] = reverse(cur, k);
    prev.next = head;
    if (cur) {
      prev = cur;
    }
    cur = next;
  }
  // 接上不需要翻转的节点
  prev.next = cur;
  return dummyHead.next;
}

function reverse(head: ListNode | null, k: number): (ListNode | null)[] {
  let cur = head;
  let prev: ListNode | null = null;
  let next: ListNode | null = null;
  for (let i = 0; i < k && cur; i++) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return [prev, next];
}

export {};
