function minMaxDifference(num: number): number {
  const arr: number[] = [];
  let x = num;
  while (x) {
    arr.unshift(x % 10);
    x = Math.floor(x / 10);
  }

  const m = arr.find(item => item !== 9);
  const n = arr.find(item => item !== 0);

  const len = arr.length;
  const minArr = arr.map(item => (item === n ? 0 : item));
  const maxArr = arr.map(item => (item === m ? 9 : item));

  let min = 0;
  let max = 0;
  for (let i = 0; i < len; i++) {
    const c = 10 ** i;
    max += maxArr[len - i - 1] * c;
    min += minArr[len - i - 1] * c;
  }

  return max - min;
}

export { minMaxDifference };
