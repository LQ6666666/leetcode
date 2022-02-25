function peakIndexInMountainArray(arr: number[]): number {
    let left = 0, right = arr.length, ans = 0;

    while (left < right) {
        const middle: number = Math.floor(left + (right - left) / 2);

        if (arr[middle] > arr[middle + 1]) {
            ans = middle;
            right = middle;
        } else {
            left = middle + 1;
        }
    }

    return ans;
};