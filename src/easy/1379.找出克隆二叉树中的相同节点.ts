import { TreeNode } from "@/utils";

function getTargetCopy(
  original: TreeNode | null,
  cloned: TreeNode | null,
  target: TreeNode | null
): TreeNode | null {
  if (original === null) return null;
  if (original === target) return cloned;
  const left = getTargetCopy(original!.left, cloned!.left, target);
  if (left) return left;
  return getTargetCopy(original!.right, cloned!.right, target);
}

export { getTargetCopy };
