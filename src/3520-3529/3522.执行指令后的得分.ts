function calculateScore(instructions: string[], values: number[]): number {
  const n = instructions.length;
  let ans = 0;
  const visits = new Array<0 | 1>(n).fill(0);

  let i = 0;
  while (!(i < 0 || i >= n) && visits[i] === 0) {
    visits[i] = 1;

    const instruction = instructions[i];
    if (instruction === "add") {
      ans += values[i];
      i++;
    } else if (instruction === "jump") {
      i += values[i];
    }
  }

  return ans;
}

export { calculateScore };
