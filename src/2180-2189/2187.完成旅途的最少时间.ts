function minimumTime(time: number[], totalTrips: number): number {
  const minT = Math.min(...time);
  const maxT = Math.max(...time);
  const avg = Math.ceil(totalTrips / time.length);

  let left = BigInt(minT * avg - 1);
  let right = BigInt(Math.min(maxT * avg, minT * totalTrips));

  while (left <= right) {
    const middle = left + ((right - left) >> 1n);
    const count = helper(time, middle);

    if (count < totalTrips) {
      left = middle + 1n;
    } else {
      right = middle - 1n;
    }
  }

  return Number(left);
}

function helper(time: number[], cost: bigint): number {
  let result = 0;
  for (const t of time) {
    result += Math.floor(Number(cost / BigInt(t)));
  }
  return result;
}

export { minimumTime };
