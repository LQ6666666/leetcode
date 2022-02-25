function reverseOnlyLetters(s: string): string {
    const sArr = s.split("");
    let left = 0, right = s.length - 1;
    const re = /[a-zA-Z]/;

    while (left < right) {
        if (re.test(sArr[left]) === false) {
            left++;
            continue;
        } else if (re.test(sArr[right]) === false) {
            right--;
            continue;
        }

        const temp = sArr[left];
        sArr[left++] = sArr[right];
        sArr[right--] = temp;
    }

    return sArr.join("");
};