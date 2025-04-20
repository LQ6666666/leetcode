function numRabbits(answers: number[]): number {
  const cnt = new Map<number, number>();
  for (const x of answers) {
    cnt.set(x, (cnt.get(x) ?? 0) + 1);
  }
  let ans = 0;

  cnt.forEach((c, x) => {
    ans += Math.ceil(c / (x + 1)) * (x + 1);
  });

  return ans;
}

export { numRabbits };
