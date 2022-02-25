function summaryRanges(nums: number[]): string[] {
    function formatter(a: number, b: number) {
        if (a === b) {
            return `${start}`
        } else {
            return `${start}->${prev}`
        }
    }

    const len = nums.length;
    const ans: string[] = [];
    if (len === 0) return ans;

    let start = nums[0];
    let prev = start;
    for (let i = 1; i < len; i++) {
        if (nums[i] - prev > 1) {
            ans.push(formatter(start, prev));
            start = nums[i];
        }

        prev = nums[i];
    }

    ans.push(formatter(start, prev));
    return ans;
};


export { };