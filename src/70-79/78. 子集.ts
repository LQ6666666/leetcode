function subsets(nums: number[]): number[][] {
    let ans: number[][] = [[]];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        const temp: number[][] = [];
        for (const item of ans) {
            temp.push([...item, num]);
        }

        ans = ans.concat(temp);
    }

    return ans;
};