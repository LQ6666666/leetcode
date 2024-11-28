import { TreeNode } from "../utils";

export { };

function serialize(root: TreeNode | null): string {
  return dfs(root).slice(0, -1);

  function dfs(node: TreeNode | null): string {
    if (node === null) return "null,";

    const ans = node.val + "," + dfs(node.left) + dfs(node.right);

    return ans;
  }
};

function deserialize(data: string): TreeNode | null {
  if (data === "null") return null;

  const arr: (null | number)[] = data.split(",").map(s => s === "null" ? null : +s);
  let index = 0;

  return dfs();

  function dfs(): TreeNode | null {
    const nodeVal = arr[index++];
    if (nodeVal === null) return null;

    const node = new TreeNode(nodeVal);
    node.left = dfs();
    node.right = dfs();

    return node;
  }
};
