function calPoints(ops: string[]): number {
    const stack: number[] = [];
    let ans = 0;

    for (const op of ops) {
        const len = stack.length;

        if (op === "+") {
            const value = stack[len - 2] + stack[len - 1];
            stack.push(value);
            ans += value;
        } else if (op === "D") {
            const value = stack[len - 1] * 2;
            stack.push(+value);
            ans += value;
        } else if (op === "C") {
            ans -= stack.pop()!;
        } else {
            stack.push(+op);
            ans += +op;
        }
    }

    return ans;
};