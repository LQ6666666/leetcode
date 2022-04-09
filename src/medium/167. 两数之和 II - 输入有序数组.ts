// function twoSum(numbers: number[], target: number): number[] {
//     for (let i = 0; i < numbers.length; i++) {
//         let left = i + 1, right = numbers.length - 1;

//         while (left <= right) {
//             const middle = left + Math.floor((right - left) >> 1);

//             if (numbers[middle] + numbers[i] === target) {
//                 return [i + 1, middle + 1];
//             } else if ((numbers[middle] + numbers[i]) > target) {
//                 right = middle - 1;
//             } else {
//                 left = middle + 1;
//             }
//         }
//     }

//     return numbers;
// };

// 二分查找
// function twoSum(numbers: number[], target: number): number[] {
//     const n = numbers.length;

//     for (let i = 0; i < n; i++) {
//         const t = target - numbers[i];
//         let left = i + 1, right = n - 1;

//         while (left <= right) {
//             const middle = left + ((right - left) >> 1);

//             if (t === numbers[middle]) {
//                 return [i + 1, middle + 1];
//             } else if (t > numbers[middle]) {
//                 left = middle + 1;
//             } else {
//                 right = middle - 1;
//             }
//         }
//     }

//     return [-1, -1];
// };

// 双指针
function twoSum(numbers: number[], target: number): number[] {
    let i = 0, j = numbers.length - 1;

    while (i <= j) {
        const sum = numbers[i] + numbers[j];

        if (sum === target) {
            return [i + 1, j + 1];
        } else if (sum > target) {
            j--;
        } else {
            i++;
        }
    }

    return [-1, -1];
};

export { };