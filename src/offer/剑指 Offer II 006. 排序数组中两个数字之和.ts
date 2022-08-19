function twoSum(numbers: number[], target: number): number[] {
    const n = numbers.length;
    for (let i = 0; i < n; i++) {
        const j = binarySearch(target - numbers[i], i + 1);
        if (j !== -1) {
            return [i, j];
        }
    }

    return [];

    function binarySearch(target: number, start: number): number {
        let left = start, right = n - 1;

        while (left <= right) {
            const mid = left + ((right - left) >> 1);
            const current = numbers[mid]
            if (numbers[mid] === target) {
                return mid;
            } else if (current < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }
};

export { };