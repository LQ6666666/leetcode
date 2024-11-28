import { ListNode } from "src/utils";

/**
 * 节点的值在数组 nums 中且节点位于链表起始位置；
 * 节点的值在数组 nums 中且节点的前一个点不在数组 nums 中
 */

function numComponents(head: ListNode | null, nums: number[]): number {
  let ans = 0,
    prevInSet = false;
  const set = new Set(nums);

  while (head) {
    if (set.has(head.val)) {
      if (!prevInSet) {
        ans++;
        prevInSet = true;
      }
    } else {
      prevInSet = false;
    }

    head = head.next;
  }

  return ans;
}

export { numComponents };
