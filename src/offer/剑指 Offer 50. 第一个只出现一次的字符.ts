function firstUniqChar(s: string): string {
    const map = new Map<string, number>();

    for (const item of s) {
        map.set(item, (map.get(item) ?? 0) + 1);
    }

    for (const item of s) {
        if (map.get(item)! === 1) {
            return item;
        }
    }

    return ' ';
};