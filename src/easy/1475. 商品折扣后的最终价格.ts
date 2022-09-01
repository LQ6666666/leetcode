export { };

// 暴力
function finalPrices(prices: number[]): number[] {
    const n = prices.length;
    const ans = new Array<number>(n);

    for (let i = 0; i < n; i++) {
        const p = prices[i];
        let temp = -1;

        for (let j = i + 1; j < n; j++) {
            const cur = prices[j];
            if (cur <= p) {
                temp = p - cur;
                break;
            }
        }

        ans[i] = temp === -1 ? p : temp;
    } 

    return ans;
};