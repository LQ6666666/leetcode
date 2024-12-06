import { TreeNode } from "@/utils";

function smallestFromLeaf(root: TreeNode | null): string {
  if (root === null) return "";

  let ans = "";
  const path: number[] = [];
  dfs(root);
  return ans;

  function dfs(node: TreeNode | null): void {
    if (node === null) return;

    path.push(node.val);

    if (node.left === null && node.right === null) {
      const s = path
        .map(x => String.fromCodePoint(x + 97))
        .reverse()
        .join("");

      if (ans.length === 0) {
        ans = s;
      } else if (s.localeCompare(ans) < 0) {
        ans = s;
      }
    }

    dfs(node.left);
    dfs(node.right);

    path.pop();
  }
}

export { smallestFromLeaf };
