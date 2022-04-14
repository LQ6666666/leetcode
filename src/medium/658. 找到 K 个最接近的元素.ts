function findClosestElements(arr: number[], k: number, x: number): number[] {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        const middle = left + ((right - left) >> 1);

        if (arr[middle] === x) {
            left = middle;
            break;
        } else if (arr[middle] < x) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    const ans: number[] = [];
    let count = k;
    right = left;
    left--;

    while (count > 0) {
        const leftValue = arr[left] ?? Number.MAX_SAFE_INTEGER;
        const rightValue = arr[right] ?? Number.MAX_SAFE_INTEGER;

        if (Math.abs(x - leftValue) <= Math.abs(x - rightValue)) {
            ans.push(leftValue);
            left--;
        } else {
            ans.push(rightValue);
            right++;
        }

        count--;
    }

    ans.sort((a, b) => a - b);
    return ans;
};

export { };