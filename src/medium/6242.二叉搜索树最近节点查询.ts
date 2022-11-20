import { TreeNode } from "src/utils";

function closestNodes(root: TreeNode | null, queries: number[]): number[][] {
  const ans: number[][] = [];
  const arr: number[] = [];

  dfs(root);

  const min = arr[0];
  const max = arr.at(-1)!;

  for (const item of queries) {
    if (item < min) {
      ans.push([-1, min]);
      continue;
    }

    if (item > max) {
      ans.push([max, -1]);
      continue;
    }

    ans.push(binarySearch(arr, item));
  }

  return ans;

  function dfs(node: TreeNode | null) {
    if (node === null) return;

    dfs(node.left);
    arr.push(node.val);
    dfs(node.right);
  }
}

function binarySearch(arr: number[], target: number) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = left + ((right - left) >>> 1);
    const cur = arr[mid];

    if (cur === target) {
      return [cur, cur];
    } else if (cur < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return [arr[right], arr[left]];
}

export {};
