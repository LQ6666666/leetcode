function stringMatching(words: string[]): string[] {
    const n = words.length;
    words.sort((a, b) => b.length - a.length);
    const set = new Set<string>();

    for (let i = 0; i < n; i++) {
        let word = words[i];
        for (let j = i + 1; j < n; j++) {
            const r = words[j]
            if (word.includes(r)) {
                set.add(r);
            }
        }
    }

    return Array.from(set);
};


export { };