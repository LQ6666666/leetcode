// function search(nums: number[], target: number): number {
//     let left = 0, right = nums.length - 1;

//     while (left <= right) {
//         const middle = left + Math.floor((right - left) / 2);

//         if (nums[middle] > target) {
//             right = middle - 1;
//         } else if (nums[middle] < target) {
//             left = middle + 1;
//         } else {
//             return middle;
//         }
//     }

//     return -1;
// };


function search(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const middle = left + ((right - left) >> 1);

        if (nums[middle] > target) {
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            return middle;
        }
    }

    return -1;
};

export { };