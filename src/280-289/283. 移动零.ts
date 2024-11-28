// function moveZeroes(nums: number[]): void {
//     function swap(i: number, j: number) {
//         let temp = nums[i];
//         nums[i] = nums[j];
//         nums[j] = temp;
//     }

//     let n = nums.length, left = 0, right = 0;
//     while (right < n) {
//         if (nums[right] !== 0) {
//             swap(left, right);
//             left++;
//         }
//         right++;
//     }
// };

function moveZeroes(nums: number[]): void {
    let index = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        if(nums[i] !== 0) {
            nums[index++] = nums[i];
        }
    }

    while(index < n) {
        nums[index] = 0;
        index++;
    }
};

export { };