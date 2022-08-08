function subsets(nums: number[]): number[][] {
    const ans: number[][] = [[]];

    for (const num of nums) {
        const temp = [];
        for (const item of ans) {
            temp.push([...item, num]);
        }

        ans.splice(ans.length - 1, 0, ...temp);
    }

    return ans;
};


export { };