function findTheDifference(s: string, t: string): string {
    const map = new Map<string, number>();

    for (const letter of t) {
        map.set(letter, (map.get(letter) ?? 0) + 1);
    }

    for (const letter of s) {
        if (map.has(letter) === false) {
            return letter;
        }

        const count = map.get(letter)!;
        if (count === 1) {
            map.delete(letter);
        } else {
            map.set(letter, count - 1);
        }
    }

    return map.keys().next().value;
};