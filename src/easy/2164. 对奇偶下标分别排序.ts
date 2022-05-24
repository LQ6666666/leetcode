function sortEvenOdd(nums: number[]): number[] {
    const n = nums.length;
    const evenArr: number[] = [], oddArr: number[] = [];
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            evenArr.push(nums[i]);
        } else {
            oddArr.push(nums[i]);
        }
    }

    evenArr.sort((a, b) => a - b);
    oddArr.sort((a, b) => b - a);

    let ans: number[] = [];
    const len = n >> 1;
    for (let i = 0; i < len; i++) {
        ans.push(evenArr[i], oddArr[i]);
    }

    if (n % 2 !== 0) {
        ans.push(evenArr[len]);
    }

    return ans;
};

export { };