function finalPositionOfSnake(n: number, commands: ("UP" | "RIGHT" | "DOWN" | "LEFT")[]): number {
  let i = 0;
  let j = 0;

  for (const command of commands) {
    switch (command) {
      case "UP":
        i--;
        break;
      case "RIGHT":
        j++;
        break;
      case "DOWN":
        i++;
        break;
      case "LEFT":
        j--;
        break;
      default:
        break;
    }
  }

  return i * n + j;
}

export { finalPositionOfSnake };
