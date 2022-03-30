function maxConsecutiveAnswers(answerKey: string, k: number): number {
    const n = answerKey.length;
    if (k >= n) return n;

    return Math.max(getCount(answerKey, k, 'T', n), getCount(answerKey, k, 'F', n));
};

function getCount(answerKey: string, k: number, c: string, n: number): number {
    let ans = 0, count = 0;

    for (let left = 0, right = 0; right < n; right++) {
        if (answerKey[right] === c) {
            count++;
        }

        while (count > k) {
            if (answerKey[left] === c) {
                count--;
            }

            left++;
        }

        ans = Math.max(right - left + 1, ans);
    }

    return ans;
}

export { };