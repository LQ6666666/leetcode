import { ListNode } from "../utils";

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // 数组转成 ListNode
    const renderListNode = (array: number[]): ListNode | null => {
        const root: ListNode = new ListNode();
        let current: ListNode = root;

        let i = 0

        while (i !== array.length) {
            const node = new ListNode();
            node.val = array[i];
            current.next = node;
            current = node;
            i++;
        }

        return root.next;
    }

    // ListNode 转成数组
    const renderArray = (node: ListNode | null): number[] => {
        if (node === null) return [];

        const arr = []
        let current: ListNode = node;

        while (true) {
            arr.push(current.val)

            if (current.next === null) {
                return arr;
            }

            current = current.next;
        }
    }

    return renderListNode(renderArray(l1).concat(renderArray(l2)).sort((a, b) => a - b));
};


// console.log(mergeTwoLists(l1, l2));

export {
    mergeTwoLists,
}