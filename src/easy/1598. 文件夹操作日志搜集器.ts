export { };

function minOperations(logs: string[]): number {
  let ans = 0;

  for (const log of logs) {
    if (log === "../") {
      ans = Math.max(ans - 1, 0);
    } else if (log === "./") {
      continue;
    } else {
      ans++;
    }
  }

  return ans;
};
