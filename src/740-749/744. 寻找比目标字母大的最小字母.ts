function nextGreatestLetter(letters: string[], target: string): string {
    let left = 0, right = letters.length;

    while (left < right) {
        const middle = left + ((right - left) >> 1);
        if (letters[middle] > target) {
            right = middle;
        } else {
            left = left + 1;
        }
    }

    return letters[left % letters.length];
};