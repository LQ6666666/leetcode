class CQueue {
    stack1: number[];
    stack2: number[];

    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    appendTail(value: number): void {
        this.stack1.push(value);
    }

    deleteHead(): number {
        // 将 stack1 的元素全部移动 stack2
        if (this.stack2.length === 0) {
            while (this.stack1.length !== 0) {
                this.stack2.push(this.stack1.pop()!);
            }
        }

        // 如果 stack2 还是空
        if (this.stack2.length === 0) {
            return -1;
        }

        return this.stack2.pop()!;
    }
}
