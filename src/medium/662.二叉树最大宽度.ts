import { TreeNode } from "@/utils";

function widthOfBinaryTree(root: TreeNode | null): bigint {
  let queue: TreeNode[] = [];
  let ans = BigInt(0);
  const map = new Map<TreeNode, bigint>();
  if (root !== null) {
    queue.push(root);
    // 求每一层的宽度时，因为两端点间的 null 节点也需要计入宽度，因此可以对节点进行编号。
    map.set(root, BigInt(1));
  }

  while (queue.length) {
    const n = queue.length;
    let begin = BigInt(-1),
      end = BigInt(-1);

    const newQueue: TreeNode[] = [];
    for (let i = 0; i < n; i++) {
      const node = queue[i];
      const index = map.get(node)!;

      if (i === 0) {
        begin = index;
      }

      if (i === n - 1) {
        end = index;
      }

      // 一个编号为 index 的左子节点的编号记为 2 × index
      if (node.left) {
        newQueue.push(node.left);
        map.set(node.left, BigInt(index) * BigInt(2));
      }

      // 右子节点的编号记为 2 × index +
      if (node.right) {
        newQueue.push(node.right);
        map.set(node.right, BigInt(index) * BigInt(2) + BigInt(1));
      }
    }

    queue = newQueue;
    // 计算每层宽度时，用每层节点的最大编号减去最小编号再加 1 即为宽度
    // ans = Math.max(ans, end - begin + 1);
    const max = end - begin + BigInt(1);
    if (max > ans) {
      ans = max;
    }
  }

  return ans;
}

export { widthOfBinaryTree };
