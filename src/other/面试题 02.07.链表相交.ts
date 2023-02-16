import { ListNode } from "@/utils";

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA === null || headB === null) return null;

  let pA: ListNode | null = headA,
    pB: ListNode | null = headB;

  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }

  return pA;
}

function getIntersectionNode1(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA === null || headB === null) return null;

  const aLen = getListNodeLength(headA);
  const bLen = getListNodeLength(headB);

  // 移动到同一起点
  let curA: ListNode | null = headA;
  let curB: ListNode | null = headB;
  const diff = Math.abs(aLen - bLen);
  let i = 0;

  if (aLen > bLen) {
    while (i < diff) {
      curA = curA!.next;
      i++;
    }
  } else if (aLen < bLen) {
    while (i < diff) {
      curB = curB!.next;
      i++;
    }
  }

  // 开始比较
  while (curA !== curB) {
    curA = curA?.next ?? null;
    curB = curB?.next ?? null;
  }

  return curA;
}

function getListNodeLength(node: ListNode | null) {
  let length = 0;
  while (node) {
    length++;
    node = node.next;
  }
  return length;
}

export { getIntersectionNode };
