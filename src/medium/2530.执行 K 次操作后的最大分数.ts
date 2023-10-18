import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

function maxKelements(nums: number[], k: number): number {
  const mq = new MaxPriorityQueue<number>();
  nums.forEach(num => mq.enqueue(num));

  let ans = 0;
  for (let i = 0; i < k; i++) {
    const num = mq.dequeue();
    ans += num;
    mq.enqueue(Math.ceil(num / 3));
  }

  return ans;
}

export { maxKelements };
