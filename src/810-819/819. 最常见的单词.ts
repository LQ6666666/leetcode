function mostCommonWord(paragraph: string, banned: string[]): string {
    const set = new Set(banned);
    const map = new Map<string, number>();
    const re = /[a-zA-z]/;

    let str = "";
    for (const item of paragraph + " ") {
        if (re.test(item)) {
            str += item.toLowerCase();
        } else {
            if (str === "") continue;

            if (set.has(str) === false) {
                map.set(str, (map.get(str) ?? 0) + 1);
            };

            str = "";
        }
    }

    let ans = "", max = Number.MIN_SAFE_INTEGER;
    map.forEach((value, key) => {
        if (value > max) {
            ans = key;
            max = value;
        }
    });

    return ans;
};

export { };