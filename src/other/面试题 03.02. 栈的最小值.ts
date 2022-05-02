class MinStack {
    private minStack: number[];
    private stack: number[];

    constructor() {
        this.minStack = [Number.MAX_SAFE_INTEGER];
        this.stack = [];
    }

    push(x: number): void {
        this.stack.push(x);
        let min = Math.min(this.getMin(), x);

        this.minStack.push(min);
    }

    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}


export { };