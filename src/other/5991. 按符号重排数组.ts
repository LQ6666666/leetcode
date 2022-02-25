function rearrangeArray(nums: number[]): number[] {
    const ans: number[] = [];
    const pArr: number[] = [];
    const nArr: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > -1) {
            pArr.push(nums[i]);
        } else {
            nArr.push(nums[i]);
        }
    }

    for (let i = 0; i < pArr.length; i++) {
        ans.push(pArr[i]);
        ans.push(nArr[i]);
    }

    return ans;
};