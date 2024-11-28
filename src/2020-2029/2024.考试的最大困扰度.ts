function maxConsecutiveAnswers(answerKey: string, k: number): number {
  return Math.max(getCount(answerKey, k, "T"), getCount(answerKey, k, "F"));
}

function getCount(answerKey: string, k: number, c: string): number {
  const n = answerKey.length;
  if (k >= n) return n;

  let ans = 0;
  let count = 0;

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

export {};
