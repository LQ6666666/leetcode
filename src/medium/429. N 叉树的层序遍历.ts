import { Queue } from "../utils";

class Node {
    val: number
    children: Node[]
    constructor(val?: number) {
        this.val = (val === undefined ? 0 : val)
        this.children = []
    }
}

function levelOrder(root: Node | null): number[][] {
    if (root === null) return [];
    const ans: number[][] = [];

    const queue = new Queue<Node>();
    queue.enQueue(root);
    while (queue.size !== 0) {
        let n = queue.size;
        const temp: number[] = [];

        while (n !== 0) {
            const node = queue.deQueue()!;
            temp.push(node.val);

            for (const item of node.children) {
                queue.enQueue(item);
            }
            n--;
        }

        ans.push(temp);
    }

    return ans;
};

export { };