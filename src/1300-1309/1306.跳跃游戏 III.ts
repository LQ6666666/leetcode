function canReach(arr: number[], start: number): boolean {
  const n = arr.length;
  let queue: number[] = [start];
  const used = new Array<number>(n).fill(0);
  used[start] = 1;

  while (queue.length) {
    const newQueue: number[] = [];
    for (const i of queue) {
      if (arr[i] === 0) return true;

      if (i + arr[i] < n && i + arr[i] >= 0 && used[i + arr[i]] === 0) {
        newQueue.push(i + arr[i]);
        used[i + arr[i]] = 1;
      }

      if (i - arr[i] < n && i - arr[i] >= 0 && used[i - arr[i]] === 0) {
        newQueue.push(i - arr[i]);
        used[i - arr[i]] = 1;
      }
    }
    console.log(newQueue);
    queue = newQueue;
  }

  return false;
}

export {};
