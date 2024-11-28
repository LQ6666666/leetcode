function lengthOfLIS(nums: number[]): number {
    const n = nums.length;
    if (n === 0) return 0;

    const ans: number[] = [nums[0]];
    let len = 1;

    for (let i = 1; i < n; i++) {
        const num = nums[i];
        if (num > ans[len - 1]) {
            ans.push(num);
            len++;
        } else {
            let left = 0, right = len - 1;
            while (left <= right) {
                const middle = left + ((right - left) >> 1);

                if (ans[middle] < num) {
                    left = middle + 1;
                } else {
                    right = middle - 1;
                }
            }

            ans[left] = num;
        }
    }

    return len;
};

export { };