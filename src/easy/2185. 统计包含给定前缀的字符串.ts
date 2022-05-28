function prefixCount(words: string[], pref: string): number {
    let count = 0;

    for (const word of words) {
        // word.startsWith(pref);
        if (startsWith(word, pref)) {
            count++;
        }
    }

    return count;
};

function startsWith(s: string, pref: string): boolean {
    const n = pref.length;
    if (n > s.length) return false;

    for (let i = 0; i < n; i++) {
        if (s[i] !== pref[i]) {
            return false;
        }
    }

    return true;
}

export { };