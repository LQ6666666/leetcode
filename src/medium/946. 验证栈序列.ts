function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const stack: number[] = [];
    let index: number = 0;

    for (const item of pushed) {
        stack.push(item);

        while (stack.length > 0 && stack[stack.length - 1] === popped[index]) {
            index++;
            stack.pop();
        }
    }

    return stack.length === 0;
};