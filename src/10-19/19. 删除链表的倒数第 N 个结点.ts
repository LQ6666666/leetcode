import { ListNode } from '../utils';

const arrayToListNode = (array: number[]): ListNode | null => {
    if (array.length === 0) {
        return null;
    }

    const root = new ListNode();
    let current = root;

    for (const item of array) {
        const newNode = new ListNode();

        newNode.val = item;
        current.next = newNode;
        current = newNode;
    }

    return root.next
}


function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head) return head;

    // 收集节点引用
    const nodes: ListNode[] = [];

    let current: ListNode | null = head;
    while (current) {
        nodes.push(current);
        current = current.next
    }

    // 找到这个节点
    const node = nodes[nodes.length - n];
    // 找到上一个节点
    const prevNode = nodes[nodes.length - n - 1];

    if (prevNode === undefined) return node.next;

    prevNode.next = node.next;
    node.next = null;

    if (node === head) return null;

    return head;
};

console.log(removeNthFromEnd(arrayToListNode([1, 2, 3, 4, 5]), 2));
console.log(removeNthFromEnd(arrayToListNode([1]), 1));
console.log(removeNthFromEnd(arrayToListNode([1, 2]), 1));
console.log(removeNthFromEnd(arrayToListNode([1, 2]), 2));
