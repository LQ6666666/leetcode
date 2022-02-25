function isUnique(astr: string): boolean {
    const set = new Set<string>();

    for (const str of astr) {
        if (set.has(str)) {
            return false;
        }
        set.add(str);
    }

    return true;
};