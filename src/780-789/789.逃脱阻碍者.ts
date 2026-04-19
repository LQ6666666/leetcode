function escapeGhosts(ghosts: number[][], target: number[]): boolean {
  const distance = helper([0, 0], target);
  for (const ghost of ghosts) {
    if (helper(ghost, target) <= distance) {
      return false;
    }
  }

  return true;
}

function helper(source: number[], target: number[]): number {
  return Math.abs(source[0] - target[0]) + Math.abs(source[1] - target[1]);
}

export {};
