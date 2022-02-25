import { ListNode } from "../utils";


function deleteNode(root: ListNode | null): void {
    if (root === null) return;

    let current = root;

    while (current.next!.next !== null) {
        current.val = current.next!.val;
        current = current.next!;
    }

    current.val = current.next!.val;
    current.next = null;
};

function deleteNode1(root: ListNode | null): void {
    if (root === null) {
        return;
    }

    root.next && (root.val = root.next?.val);
    root.next = root.next?.next ?? null;
};

export {
    deleteNode
}
