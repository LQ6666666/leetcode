function countAsterisks(s: string): number {
    const n = s.length;
    let ans = 0;
    let flag = true, i = 0;

    while (i < n) {
        const ch = s.charAt(i);

        if (ch === "|") {
            flag = !flag;
        } else if (flag && ch === "*") {
            ans++;
        }

        i++;
    }

    return ans;
};
export { };