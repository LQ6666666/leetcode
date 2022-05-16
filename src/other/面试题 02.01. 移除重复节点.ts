import { ListNode } from "../utils";

// 新建节点
function removeDuplicateNodes1(head: ListNode | null): ListNode | null {
    if (head === null) return head;

    const set = new Set<number>();
    const ans = new ListNode();
    let cur = ans;

    let current: ListNode | null = head;

    while (current) {
        if (!set.has(current.val)) {
            cur.next = new ListNode(current.val);
            cur = cur.next;

            set.add(current.val);
        }

        current = current.next;
    }

    return ans.next;
};

// 原地修改
function removeDuplicateNodes(head: ListNode | null): ListNode | null {
    if (head === null) return head;

    const set = new Set<number>();
    set.add(head.val);

    let pos: ListNode | null = head;

    while (pos?.next) {
        const current = pos.next;
        if (set.has(current.val)) {
            pos.next = pos.next.next;
        } else {
            pos = pos.next;
        }

        set.add(pos.val);
    }

    if (pos) {
        pos.next = null;
    }

    return head;
};


export { };