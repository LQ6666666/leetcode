import { ListNode } from "../utils";

function mergeInBetween1(
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode
): ListNode | null {
  // 1. 找到 list2 的尾
  let tail: ListNode = list2;
  while (tail?.next) {
    tail = tail.next;
  }

  // 2. 找到 a - 1
  let nodeA: ListNode | null = list1;
  for (let i = 0; i < a - 1; i++) {
    nodeA = nodeA?.next ?? null;
  }

  // 3. 找到 b
  let nodeB: ListNode | null = nodeA?.next ?? null;
  for (let i = a; i < b + 1; i++) {
    nodeB = nodeB?.next ?? null;
  }

  if (nodeA) {
    nodeA.next = list2;
  }

  tail.next = nodeB;

  return list1;
}

function mergeInBetween(
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null
): ListNode | null {
  let list2Tail = list2;
  while (list2Tail?.next) {
    list2Tail = list2Tail.next;
  }

  let a1Node = list1;
  for (let i = 0; i < a - 1; i++) {
    a1Node = a1Node?.next ?? null;
  }

  let bNode = a1Node?.next ?? null;
  for (let i = a; i < b + 1; i++) {
    bNode = bNode?.next ?? null;
  }

  if (a1Node) {
    a1Node.next = list2;
  }

  list2Tail!.next = bNode;

  return list1;
}

export { mergeInBetween };
