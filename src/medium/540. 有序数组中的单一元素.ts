// function singleNonDuplicate(nums: number[]): number {
//     let i = 0, j = 1;
//     const len = nums.length;

//     while (j < len) {
//         if (nums[i] !== nums[j]) {
//             return nums[i];
//         }

//         i += 2;
//         j += 2;
//     }

//     return nums[0];
// };

function singleNonDuplicate(nums: number[]): number {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const middle = left + ((right - left) >> 1);

        if (middle % 2 === 0) {
            if (nums[middle + 1] === nums[middle]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        } else {
            if (nums[middle - 1] === nums[middle]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
    }

    return left;
};

export { };