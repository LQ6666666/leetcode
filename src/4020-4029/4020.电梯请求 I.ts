function elevatorRequests(n: number, requests: number[]): number {
  let ans = 0;
  let pre = 0;
  for (let i = 0; i < requests.length; i++) {
    ans += Math.abs(requests[i] - pre);
    pre = requests[i];
  }

  return ans;
}

export {};
