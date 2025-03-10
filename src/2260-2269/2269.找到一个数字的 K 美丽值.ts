function divisorSubstrings(num: number, k: number): number {
  let t = num;

  const arr: number[] = [];
  while (t > 0) {
    arr.push(t % 10);
    t = Math.floor(t / 10);
  }

  let ans = 0;
  for (let i = arr.length; i >= k; i--) {
    let x = 0;
    let y = 1;
    for (let j = i - k; j < i; j++) {
      x += arr[j] * y;
      y *= 10;
    }

    if (num % x === 0) {
      ans++;
    }
  }

  return ans;
}

export {};
