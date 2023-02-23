import { TreeNode, ListNode } from "../utils";

function listOfDepth(tree: TreeNode | null): Array<ListNode | null> {
  let queue: TreeNode[] = tree ? [tree] : [];
  let ans: ListNode[] = [];

  while (queue.length) {
    const newQueue: TreeNode[] = [];
    const head = new ListNode();
    let current = head;
    for (const node of queue) {
      current.next = new ListNode(node.val);
      current = current.next;

      if (node.left) {
        newQueue.push(node.left);
      }
      if (node.right) {
        newQueue.push(node.right);
      }
    }
    ans.push(head.next!);
    queue = newQueue;
  }

  return ans;
}

export {};
