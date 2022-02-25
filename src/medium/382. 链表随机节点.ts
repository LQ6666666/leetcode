import { ListNode } from "../utils";

class Solution {
    nodes: number[] = [];

    constructor(head: ListNode | null) {
        let current = head;

        while (current) {
            this.nodes.push(current.val);

            current = current.next;
        }
    }

    getRandom(): number {
        const random: number = Math.floor(Math.random() * this.nodes.length);

        return this.nodes[random];
    }
}

// const solution = new Solution([1, 2, 3]);
// solution.getRandom(); // 返回 1
// solution.getRandom(); // 返回 3
// solution.getRandom(); // 返回 2
// solution.getRandom(); // 返回 2
// solution.getRandom(); // 返回 3


export { };