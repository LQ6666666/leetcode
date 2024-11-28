export { };

/*
function shuffle(nums: number[], n: number): number[] {
    const ans = new Array<number>(n << 1);

    let count = 0;
    for (let i = 0; i < n; i++) {
        ans[count++] = nums[i];
        ans[count++] = nums[i + n]
    }

    return ans;
};
*/

/*
function shuffle(nums: number[], n: number): number[] {
    const ans = new Array<number>(n << 1);

    for (let i = 0; i < n; i++) {
        ans[i << 1] = nums[i];
        ans[(i << 1 )+ 1] = nums[i + n]
    }

    return ans;
};
*/