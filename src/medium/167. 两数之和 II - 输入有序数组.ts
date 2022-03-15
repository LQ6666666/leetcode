function twoSum(numbers: number[], target: number): number[] {
    for (let i = 0; i < numbers.length; i++) {
        let left = i + 1, right = numbers.length - 1;

        while (left <= right) {
            const middle = left + Math.floor((right - left) >> 1);

            if (numbers[middle] + numbers[i] === target) {
                return [i + 1, middle + 1];
            } else if ((numbers[middle] + numbers[i]) > target) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
    }

    return numbers;
};

export { };