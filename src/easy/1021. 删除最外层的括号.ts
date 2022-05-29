function removeOuterParentheses(s: string): string {
    const stack: true[] = [];
    let ans = "";

    for (const ch of s) {
        if (ch === ")") {
            stack.pop();
        }

        if (stack.length > 0) {
            ans += ch;
        }

        if (ch === "(") {
            stack.push(true);
        }
    }

    return ans;
};

export { };