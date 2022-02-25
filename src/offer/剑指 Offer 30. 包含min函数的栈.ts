class MinStack {
    private stackA: number[];
    private stackB: number[];

    constructor() {
        this.stackA = [];
        this.stackB = [];
    }

    push(x: number): void {
        this.stackA.push(x);

        if (this.stackB.length === 0 || this.stackB[this.stackB.length - 1] >= x) {
            this.stackB.push(x);
        }
    }

    pop(): void {
        if (this.stackA.pop() === this.stackB[this.stackB.length - 1]) {
            this.stackB.pop();
        }
    }

    top(): number {
        return this.stackA.slice(-1)[0];
    }

    min(): number {
        return this.stackB[this.stackB.length - 1];
    }
}
