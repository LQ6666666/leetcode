import { ListNode } from "../utils";

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    // 1.计算节点数量
    // 找到最尾的元素
    let tail: ListNode | null = head;
    let cur: ListNode | null = head;
    let count = 0;
    while (cur !== null) {
        count++;
        tail = cur;
        cur = cur.next;
    }

    k %= count;
    if (k === 0) return head;

    // 找到倒数的第 k 个节点的上一个节点，就是 count - k - 1
    const targetIndex = count - k - 1;
    let i = 0, target: ListNode | null = null;
    cur = head;
    while (cur !== null) {
        if (i++ === targetIndex) {
            target = cur;
            break;
        }

        cur = cur.next;
    }

    if (target) {
        const node = target.next;

        target.next = null;
        if (tail) {
            tail.next = head;
        }

        target = node;
    }

    return target;
};

export { };