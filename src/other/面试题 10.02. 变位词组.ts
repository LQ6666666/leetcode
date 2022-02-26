function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (const str of strs) {
        const key = str.split("").sort().toString();

        if (map.has(key)) {
            map.get(key)!.push(str);
        } else {
            map.set(key, [str]);
        }
    }

    return Array.from(map.values());
};

export { };