function reverseStr(s: string, k: number): string {
    const len = s.length;
    const doubleK = k << 1;
    if (len < doubleK) return s;

    const strArr = s.split('');
    function reverse(start: number, end: number) {
        while (start < end) {
            let temp = strArr[start];
            strArr[start++] = strArr[end];
            strArr[end--] = temp;
        }
    }

    let i = 0;
    while (i < len) {
        const start = i;
        i = i + doubleK;

        if (i > len) {
            const rest = len - start;
            if (rest < k) {
                reverse(start, len - 1);
            } else if (rest < doubleK || rest === k) {
                reverse(start, start + k - 1);
            }
        } else {
            reverse(start, i - k - 1);
        }
    }

    return strArr.join("");
};