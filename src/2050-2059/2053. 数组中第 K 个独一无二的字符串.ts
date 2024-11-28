function kthDistinct(arr: string[], k: number): string {
    const map = new Map<string, number>();
    for (const ch of arr) {
        map.set(ch, (map.get(ch) ?? 0) + 1);
    }

    let i = 0;
    for (const ch of arr) {
        const count = map.get(ch)!;
        if (count === 1) {
            if (i === k) {
                return ch;
            }

            i++;
        }
    }

    return "";
};

export { };