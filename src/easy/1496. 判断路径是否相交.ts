export { };

function isPathCrossing(path: string): boolean {
  const set = new Set<string>();
  const pos: [number, number] = [0, 0];
  set.add(pos.toString());

  for (const d of path) {
    switch (d) {
      case "N":
        pos[1]++;
        break;
      case "S":
        pos[1]--;
        break;
      case "E":
        pos[0]++;
        break;
      case "W":
        pos[0]--;
        break;
    }

    const posStr = pos.toString();
    if (set.has(posStr)) {
      return true;
    } else {
      set.add(posStr);
    }
  }

  return false;
};
