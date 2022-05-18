function isAlienSorted(words: string[], order: string): boolean {
    const map = new Map<string, number>();

    for (let i = 0; i < 26; i++) {
        map.set(order[i], i);
    }

    const n = words.length;

    for (let i = 1; i < n; i++) {
        const prev = words[i - 1];
        const cur = words[i];

        if (!compare(prev, cur, map)) {
            return false;
        }
    }

    return true;
};

function compare(w1: string, w2: string, map: Map<string, number>): boolean {
    const n1 = w1.length;
    const n2 = w2.length;

    const min = Math.min(n1, n2);
    let valid = false;

    for (let i = 0; i < min; i++) {
        const v1 = map.get(w1.charAt(i))!;
        const v2 = map.get(w2.charAt(i))!;

        if (v1 > v2) {
            return false;
        } else if (v1 < v2) {
            valid = true;
            break;
        }
    }

    if (!valid) {
        if (n1 > n2) {
            return false;
        }
    }

    return true;
}

export { };