function areOccurrencesEqual(s: string): boolean {
    const map = new Map<string, number>();

    for (const char of s) {
        map.set(char, (map.get(char) ?? 0) + 1);
    }

    const count = map.get(s.charAt(0))!;
    const it = map.values();

    let cur = it.next();
    while (cur.done === false) {
        if (cur.value === count) {
            cur = it.next();
        } else {
            return false;
        }
    }

    return true;
};