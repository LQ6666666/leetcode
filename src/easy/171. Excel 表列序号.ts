function titleToNumber(columnTitle: string): number {
    let ans = 0;

    for (const ch of columnTitle) {
        ans = (ch.charCodeAt(0) - 64) + ans * 26;
    }

    return ans;
};

export { };