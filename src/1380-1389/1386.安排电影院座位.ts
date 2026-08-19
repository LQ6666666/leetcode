function maxNumberOfFamilies(n: number, reservedSeats: number[][]): number {
  const seats = new Map<number, number>();
  for (const [row, seat] of reservedSeats) {
    if (2 <= seat && seat <= 9) {
      seats.set(row, (seats.get(row) ?? 0) | (1 << (seat - 2)));
    }
  }

  const emptyRows = n - seats.size;
  let ans = emptyRows * 2;
  seats.forEach(x => {
    if ((x & 0b1111) === 0 || (x & 0b111100) === 0 || (x & 0b11110000) == 0) {
      ans++;
    }
  });

  return ans;
}

export {};
