function furthestDistanceFromOrigin(moves: string): number {
  const n = moves.length;
  let left = 0;
  let right = 0;
  for (let i = 0; i < n; i++) {
    if (moves[i] === "_") {
      left--;
      right++;
    } else if (moves[i] === "L") {
      left--;
      right--;
    } else {
      left++;
      right++;
    }
  }

  return Math.max(Math.abs(left), Math.abs(right));
}

export { furthestDistanceFromOrigin };
