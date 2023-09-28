function carPooling(trips: number[][], capacity: number): boolean {
  const diff: number[] = new Array(1002).fill(0);
  for (const [numPassengers, form, to] of trips) {
    diff[form] += numPassengers;
    diff[to] -= numPassengers;
  }

  let sum = 0;
  for (const numPassengers of diff) {
    sum += numPassengers;
    if (sum > capacity) {
      return false;
    }
  }
  return true;
}

export { carPooling };
