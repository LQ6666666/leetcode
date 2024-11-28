// 两次遍历
function sortArrayByParity1(nums: number[]): number[] {
    const n = nums.length;
    const ans: number[] = [];
    let index = 0;

    for (let i = 0; i < n; i++) {
        if (nums[i] % 2 === 0) {
            ans[index++] = nums[i];
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] % 2 !== 0) {
            ans[index++] = nums[i];
        }
    }

    return ans;
};

// 一次遍历
function sortArrayByParity(nums: number[]): number[] {
    const n = nums.length;
    const ans: number[] = [];
    let left = 0, right = n - 1;

    for (let i = 0; i < n; i++) {
        if (nums[i] % 2 === 0) {
            ans[left++] = nums[i];
        } else {
            ans[right--] = nums[i];
        }
    }

    return ans;
};

export { };