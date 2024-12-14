import { ListNode } from "@/utils";

function getDecimalValue(node: ListNode | null): number {
  const nums: number[] = [];

  while (node) {
    nums.push(node.val);
    node = node.next;
  }

  let ans = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i]) {
      ans |= nums[i] << (n - i - 1);
    }
  }

  return ans;
}

export {};
