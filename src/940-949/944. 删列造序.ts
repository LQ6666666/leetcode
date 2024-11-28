function minDeletionSize(strs: string[]): number {
    const set = new Set<number>();
    const n = strs.length, m = strs[0].length;

    // 一层一层遍历，记录上一层的大小
    for (let i = 1; i < n; i++) {
        const current = strs[i];
        const prev = strs[i - 1];
        // 比较上一层大小
        for (let j = 0; j < m; j++) {
            if (current[j] >= prev[j]) {
                continue;
            }

            set.add(j);

            if (set.size === m) {
                break;
            }
        }
    }

    return set.size;
};

export { };