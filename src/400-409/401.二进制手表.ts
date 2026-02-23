function readBinaryWatch(turnedOn: number): string[] {
  const ans: string[] = [];
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      if (bitCount(h) + bitCount(m) == turnedOn) {
        ans.push(`${h}:${m.toString().padStart(2, "0")}`);
      }
    }
  }
  return ans;
}

function bitCount(num: number): number {
  let count = 0;
  let x = num;
  while (x) {
    if (x & 1) {
      count++;
    }
    x >>= 1;
  }
  return count;
}

export { readBinaryWatch };
