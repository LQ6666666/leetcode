function makeEqual(words: string[]): boolean {
    // 遍历，计算每个字符数量是否相等即可
    const n = words.length;
    const map = new Map<string, number>();

    for (const word of words) {
        for (const ch of word) {
            map.set(ch, (map.get(ch) ?? 0) + 1);
        }
    }

    const iterator = map.values();
    let current = iterator.next();
    while (!current.done) {
        if (current.value % n !== 0) {
            return false;
        }

        current = iterator.next();
    }

    return true;
};

export { };