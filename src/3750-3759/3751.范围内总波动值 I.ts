function totalWaviness(num1: number, num2: number): number {
  let ans = 0;
  for (let i = num1; i <= num2; i++) {
    let num = i;
    const arr: number[] = [];
    while (num) {
      arr.push(num % 10);
      num = Math.floor(num / 10);
    }

    for (let j = 1; j < arr.length - 1; j++) {
      if (
        (arr[j] > arr[j - 1] && arr[j] > arr[j + 1]) ||
        (arr[j] < arr[j - 1] && arr[j] < arr[j + 1])
      ) {
        ans++;
      }
    }
  }
  return ans;
}

export {};
