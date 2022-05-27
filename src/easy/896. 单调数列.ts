function isMonotonic(nums: number[]): boolean {
    const n = nums.length;

    return monotonic((a, b) => a > b) || monotonic((a, b) => a < b);

    function monotonic(compareFn: (a: number, b: number) => boolean) {
        let prev = nums[0];

        for (let i = 1; i < n; i++) {
            const cur = nums[i];
            if (compareFn(prev, cur)) {
                return false;
            }
            prev = cur;
        }

        return true;
    }
};

export { };