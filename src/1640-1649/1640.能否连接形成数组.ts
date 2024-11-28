function canFormArray(arr: number[], pieces: number[][]): boolean {
  const map = new Map<number, number>();

  for (let i = 0, n= pieces.length; i < n; i++) {
    map.set(pieces[i][0], i);
  }

  for (let i = 0, n = arr.length; i < n;) {
    const index = map.get(arr[i]);
    if (index === undefined) return false;

    const piece = pieces[index];
    const len = piece.length;

    for (let j = 0; j < len; i++, j++) {
      if(arr[i] !== piece[j]) {
        return false;
      }
    }
  }

  return true;
};

export { canFormArray };
