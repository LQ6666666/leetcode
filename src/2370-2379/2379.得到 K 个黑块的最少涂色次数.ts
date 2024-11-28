function minimumRecolors(blocks: string, k: number): number {
  const n = blocks.length;
  let left = 0,
    right = 0;
  let count = 0;

  while (right < k) {
    if (blocks[right++] === "W") {
      count++;
    }
  }

  let ans = count;

  while (right < n) {
    count += blocks[left] === "W" ? -1 : 0;
    count += blocks[right] === "W" ? 1 : 0;

    ans = Math.min(ans, count);

    left++, right++;
  }

  return ans;
}

export {};
