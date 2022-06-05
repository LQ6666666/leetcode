function compress(chars: string[]): number {
    let pre = "";
    let count = 0;
    const clone: string[] = [];

    for (const ch of chars) {
        if (ch !== pre) {
            add(pre, count, clone);
            count = 0;
        }

        count++;
        pre = ch;
    }

    if (count > 0) {
        add(pre, count, clone);
    }

    const n = clone.length;
    for (let i = 0; i < n; i++) {
        chars[i] = clone[i];
    }
    return n;
};

function add(char: string, count: number, target: string[]): void {
    if (char === "") return;

    if (count === 1) {
        target.push(char);
    } else {
        target.push(char, ...count.toString().split(""));
    }
}

export { };