function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (const item of strs) {
        const key = calcKey(item);
        let value = map.get(key);
        if (value === undefined) {
            value = [];
            map.set(key, value);
        }

        value.push(item);
    }

    return Array.from(map.values());
};

function calcKey(str: string): string {
    const arr = (new Array(26)).fill(0);
    for (let i = 0; i < str.length; i++) {
        arr[str[i].charCodeAt(0) - 97]++;
    }
    return arr.toString();
}