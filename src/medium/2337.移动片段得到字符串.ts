function canChange(start: string, target: string): boolean {
  const n = start.length;
  let i = 0;
  let j = 0;
  while (i < n || j < n) {
    while (i < n && start[i] === "_") {
      i++;
    }
    while (j < n && target[j] === "_") {
      j++;
    }

    if (i === n || j === n) {
      break;
    }

    if (start[i] !== target[j] || (start[i] === "L" && i < j) || (target[j] === "R" && i > j)) {
      return false;
    }

    i++, j++;
  }

  return i === j;
}

export { canChange };
