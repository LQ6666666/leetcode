function heightChecker(heights: number[]): number {
    const n = heights.length;
    const clone = heights.slice();
    clone.sort((a, b) => a - b);

    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (heights[i] !== clone[i]) {
            ans++;
        }
    }

    return ans;
};

export { };