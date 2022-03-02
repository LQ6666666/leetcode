function countOdds(low: number, high: number): number {
    function pre(num: number) {
        return (num + 1) >> 1;
    }

    return pre(high) - pre(low - 1);
};