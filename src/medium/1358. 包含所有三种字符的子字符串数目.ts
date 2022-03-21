function numberOfSubstrings(s: string): number {
    const n = s.length;
    let ans = 0;
    const map = new Map([["a", 0], ["b", 0], ["c", 0]]);

    let start = 0, end = 0;
    while (end < n) {
        map.set(s[end], map.get(s[end])! + 1);

        while (check(map)) {
            ans = ans + (s.length - end);
            map.set(s[start], map.get(s[start])! - 1);
            start++;
        }

        end++;
    }

    return ans;
};

function check(map: Map<string, number>): boolean {
    return ["a", "b", "c"].every(c => map.get(c)! > 0);
}

export { };