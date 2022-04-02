// function peakIndexInMountainArray(arr: number[]): number {
//     let left = 0, right = arr.length, ans = 0;

//     while (left < right) {
//         const middle: number = Math.floor(left + (right - left) / 2);

//         if (arr[middle] > arr[middle + 1]) {
//             ans = middle;
//             right = middle;
//         } else {
//             left = middle + 1;
//         }
//     }

//     return ans;
// };

function peakIndexInMountainArray(arr: number[]): number {
    let left = 1, right = arr.length - 2;
    let ans = -1;

    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        if (arr[mid] > arr[mid + 1]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans;
};

export { };