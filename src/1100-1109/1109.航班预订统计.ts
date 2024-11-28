function corpFlightBookings(bookings: number[][], n: number): number[] {
  const diff: number[] = new Array(n + 1).fill(0);

  for (const [first, last, seats] of bookings) {
    diff[first] += seats;
    if (last + 1 <= n) {
      diff[last + 1] -= seats;
    }
  }

  for (let i = 2; i <= n; i++) {
    diff[i] += diff[i - 1];
  }

  return diff.slice(1);
}

export { corpFlightBookings };
