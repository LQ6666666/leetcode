function maxJump(stones: number[]): number {
  return Math.max(stones[1] - stones[0], helper(0, stones), helper(1, stones));
}

function helper(startIdex: number, stones: number[]): number {
  const n = stones.length;
  let diff = 0;
  for (let i = startIdex; i + 2 < n; i += 2) {
    diff = Math.max(diff, stones[i + 2] - stones[i]);
  }
  return diff;
}

export { maxJump };
