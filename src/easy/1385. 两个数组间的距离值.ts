function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
    arr2.sort((a, b) => a - b);
    let count = 0;
    for (const item of arr1) {
        if (!binarySearch(arr2, item - d, item + d)) {
            count++;
        }
    }
    return count;
};

function binarySearch(arr: number[], low: number, high: number): boolean {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        const middle = left + ((right - left) >> 1);
        if (arr[middle] >= low && arr[middle] <= high) {
            return true;
        } else if (arr[middle] < low) {
            left = middle + 1;
        } else if (arr[middle] > high) {
            right = middle - 1;
        }
    }

    return false;
}

export { };