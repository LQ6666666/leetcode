function checkAlmostEquivalent(word1: string, word2: string): boolean {
    const map = new Map<string, number>();

    for (const word of word1) {
        map.set(word, (map.get(word) ?? 0) + 1);
    }

    for (const word of word2) {
        map.set(word, (map.get(word) ?? 0) - 1);
    }

    const iterator = map.values();
    let current = iterator.next();

    while (current.done === false) {
        if (Math.abs(current.value) > 3) {
            return false;
        }

        current = iterator.next();
    }

    return true;
};