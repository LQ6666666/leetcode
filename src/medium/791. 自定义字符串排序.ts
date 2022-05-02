function customSortString(order: string, s: string): string {
    const map = new Map<string, number>();

    for (const ch of s) {
        map.set(ch, (map.get(ch) ?? 0) + 1);
    }

    let ans = "";
    for (const ch of order) {
        const count = map.get(ch);

        if (count) {
            ans += ch.padStart(count, ch);
            map.delete(ch);
        }
    }

    map.forEach((value, key) => {
        ans += key.padStart(value, key);
    });

    return ans;
};


export { };