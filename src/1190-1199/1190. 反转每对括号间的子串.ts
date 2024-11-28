function reverseParentheses(s: string): string {
    // 用栈存放 str
    const stack: string[] = [];
    let str = '';

    for (const ch of s) {
        if (ch === '(') {
            stack.push(str);
            str = '';
        } else if (ch === ')') {
            const part1 = stack.pop();
            const part2 = reverse(str);
            str = part1 + part2;
        } else {
            str += ch;
        }
    }

    return str;
};

function reverse(str: string): string {
    let ans = "";
    for (const item of str) {
        ans = item + ans;
    }
    return ans;
}