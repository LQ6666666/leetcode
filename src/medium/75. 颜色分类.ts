function sortColors(nums: number[]): void {
    const n = nums.length;
    let start = -1, end = n;

    let i = 0;
    while (i < end) {
        const num = nums[i];

        if (num === 0) {
            swap(nums, i, ++start);
            i++;
        } else if (num === 2) {
            swap(nums, i, --end);
        } else {
            i++;
        }
    }
};

function swap(arr: number[], i: number, j: number): void {
    const temp: number = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

export { };
