function maxDistToClosest(seats: number[]): number {
  const n = seats.length;
  let left = 0;
  while (left < n && seats[left] === 0) {
    left++;
  }

  let ans = Math.max(-1, left);
  while (left < n) {
    let right = left + 1;
    while (right < n && seats[right] === 0) {
      right++;
    }

    if (right === n) {
      ans = Math.max(ans, right - left - 1);
    } else {
      ans = Math.max(ans, Math.floor((right - left) / 2));
    }

    left = right;
  }

  return ans;
}

export { maxDistToClosest };
