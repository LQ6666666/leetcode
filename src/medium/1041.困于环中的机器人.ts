const enum Direction {
  TOP,
  LEFT,
  BOTTOM,
  RIGHT
}

function isRobotBounded(instructions: string): boolean {
  let x = 0,
    y = 0;

  let d: Direction = Direction.TOP;

  for (let i = 0; i < 4; i++) {
    for (const c of instructions) {
      if (c === "G") {
        switch (d) {
          case Direction.TOP:
            y++;
            break;
          case Direction.BOTTOM:
            y--;
            break;
          case Direction.LEFT:
            x++;
            break;
          case Direction.RIGHT:
            x--;
            break;
        }
      } else if (c === "L") {
        switch (d) {
          case Direction.TOP:
            d = Direction.LEFT;
            break;
          case Direction.BOTTOM:
            d = Direction.RIGHT;
            break;
          case Direction.LEFT:
            d = Direction.BOTTOM;
            break;
          case Direction.RIGHT:
            d = Direction.TOP;
            break;
        }
      } else {
        switch (d) {
          case Direction.TOP:
            d = Direction.RIGHT;
            break;
          case Direction.BOTTOM:
            d = Direction.LEFT;
            break;
          case Direction.LEFT:
            d = Direction.TOP;
            break;
          case Direction.RIGHT:
            d = Direction.BOTTOM;
            break;
        }
      }
    }

    if (x === 0 && y === 0) {
      return true;
    }
  }

  return false;
}

export {};
