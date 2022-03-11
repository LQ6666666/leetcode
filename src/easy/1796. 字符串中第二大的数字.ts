function secondHighest(s: string): number {
    const set = new Set<number>();
    const re = /[0-9]/;

    for (const char of s) {
        if (!re.test(char)) continue;

        set.add(+char);
    }

    if (set.size === 1) return -1;

    let flag = false;
    for (let i = 9; i > -1; i--) {
        if (!set.has(i)) continue;

        if (flag) {
            return i;
        } else {
            flag = true;
        }
    }

    return -1;
};