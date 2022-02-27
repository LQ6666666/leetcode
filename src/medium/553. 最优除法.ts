function optimalDivision(nums: number[]): string {
    let len = nums.length;
    if (len < 3) return nums.join("/");

    // 三个及以上就要加 () 了
    let ans = "(";
    for (let i = 1; i < len - 1; i++) {
        ans += `${nums[i]}/`;
    }
    ans = `${nums[0]}/${ans}${nums[len - 1]})`;

    return ans;
};

console.log(optimalDivision([1000, 100, 10, 2]));   // 1000/(100/10/2)

export { };