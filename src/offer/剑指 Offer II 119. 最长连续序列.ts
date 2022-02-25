function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0;

    const set = new Set<number>(nums);
    let maxLen = Number.MIN_SAFE_INTEGER;

    for (const num of Array.from(nums)) {
        if (set.has(num - 1) === false) {
            let currentNum = num + 1;
            let len = 1;

            while (set.has(currentNum)) {
                currentNum++;
                len++;
            }

            if (len > maxLen) {
                maxLen = len;
            }
        };
    }

    return maxLen;
};