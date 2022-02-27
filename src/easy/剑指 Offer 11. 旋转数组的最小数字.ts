function minArray(numbers: number[]): number {
    const prev = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (prev > numbers[i]) {
            return numbers[i];
        }
    }

    return prev;
};