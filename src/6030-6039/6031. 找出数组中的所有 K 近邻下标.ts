function findKDistantIndices(nums: number[], key: number, k: number): number[] {
    // 1. 找到所有满足的 keys
    const keys: number[] = [];
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === key) {
            keys.push(j);
        }
    }

    const ans: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < keys.length; j++) {
            if (Math.abs(i - keys[j]) <= k) {
                ans.push(i);
                break;
            }
        }
    }

    return ans;
};