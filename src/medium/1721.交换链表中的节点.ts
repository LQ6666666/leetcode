import { ListNode } from "@/utils";

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  if (head === null) return head;
  // 拿到总节点数
  let current: ListNode | null = head;

  let aNode: ListNode | null = null;
  let bNode: ListNode | null = null;

  let index = 0;
  while (current) {
    index++;

    if (index === k) {
      aNode = current;
    }
    current = current.next;
  }

  const total = index;
  index = 0;

  current = head;
  while (current) {
    index++;

    if (index === total - k + 1) {
      bNode = current;
    }
    current = current.next;
  }

  if (aNode && bNode) {
    let temp = aNode.val;
    aNode.val = bNode.val;
    bNode.val = temp;
  }

  return head;
}

export { swapNodes };
