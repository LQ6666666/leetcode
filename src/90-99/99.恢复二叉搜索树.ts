import { TreeNode } from "@/utils";

function recoverTree(root: TreeNode | null): void {
  const nums = inorder(root);
  // 找到二叉搜索树中序遍历得到值序列的不满足条件的位置
  const [x, y] = findTwoSwapped(nums);
  // 交换 x 和 y 两个节点即可
  recover(root, x, y, 2);
}

function inorder(root: TreeNode | null): number[] {
  const nums: number[] = [];
  return dfs(root), nums;

  function dfs(node: TreeNode | null): void {
    if (node === null) return;
    dfs(node.left);
    nums.push(node.val);
    dfs(node.right);
  }
}

function findTwoSwapped(nums: number[]): [x: number, y: number] {
  const n = nums.length;
  // 两种情况
  // 1.错误的节点不相邻 [1,6,3,4,5,2,7]
  // 2.错误的节点相邻 [1,2,4,3,5,6,7]
  let index1 = -1,
    index2 = -1;
  for (let i = 0; i < n - 1; ++i) {
    if (nums[i + 1] < nums[i]) {
      index2 = i + 1;
      if (index1 === -1) {
        index1 = i;
      } else {
        break;
      }
    }
  }
  return [nums[index1], nums[index2]];
}

function recover(root: TreeNode | null, x: number, y: number, count: number): void {
  if (root === null) return;

  if (root.val === x || root.val === y) {
    root.val = root.val === x ? y : x;
    count--;
    if (count === 0) return;
  }
  recover(root.left, x, y, count);
  recover(root.right, x, y, count);
}

export { recoverTree };
