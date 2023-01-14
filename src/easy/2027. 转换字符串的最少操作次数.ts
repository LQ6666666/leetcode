function minimumMoves(s: string): number {
  let i = 0,
    ret = 0;
  while (i < s.length) {
    if (s.charAt(i) === "X") {
      ret++;
      i += 3;
    } else {
      i++;
    }
  }
  return ret;
}

export { minimumMoves };
