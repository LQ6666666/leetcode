import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

function halveArray(nums: number[]): number {
  const mq = new MaxPriorityQueue<number>();

  for (const num of nums) {
    mq.enqueue(num);
  }

  let ans = 0;
  const sumHalf = nums.reduce((acc, curr) => acc + curr, 0) / 2;
  let sum = 0;
  while (sum < sumHalf) {
    const x = mq.dequeue() / 2;
    sum += x;
    mq.enqueue(x);
    ans++;
  }

  return ans;
}

export {};
