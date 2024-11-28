function wordPattern(pattern: string, s: string): boolean {
    const n = pattern.length;
    // 1.s 拆成数组
    const sArr = s.split(" ");

    if (n !== sArr.length) return false;

    // 2.记录遍历 pattern 和 s 数组之前的映射关系
    const map = new Map<string, string>();
    // 3.记录有没有重复的 value
    const set = new Set<string>();
    for (let i = 0; i < n; i++) {
        const ch = pattern.charAt(i);
        const item = sArr[i];

        const value = map.get(ch);
        // 没有
        if (value === undefined) {
            if (set.has(item)) return false;

            map.set(ch, item);
            set.add(item);
            continue;
        }

        // 不一致
        if (value !== item) {
            return false;
        }
    }

    return true;
};

export { };