function maxDistance(moves: string): number {
  let x = 0;
  let y = 0;
  let _ = 0;

  for (const c of moves) {
    switch (c) {
      case "U":
        y++;
        break;
      case "D":
        y--;
        break;
      case "L":
        x--;
        break;
      case "R":
        x++;
        break;
      case "_":
        _++;
        break;
      default:
        break;
    }
  }

  return Math.abs(x) + Math.abs(y) + _;
}

export {};
