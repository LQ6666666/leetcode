import { MinPriorityQueue } from "@datastructures-js/priority-queue";

function minOperations(nums: number[], k: number): number {
  const pq = new MinPriorityQueue<number>();
  for (const num of nums) {
    if (num < k) {
      pq.enqueue(num);
    }
  }

  // 加两个 k 防止边界条件
  pq.enqueue(k);
  pq.enqueue(k);

  let ans = 0;
  while (pq.front() < k) {
    const x = pq.dequeue();
    const y = pq.dequeue();
    pq.enqueue(x * 2 + y);
    ans++;
  }

  return ans;
}

export { minOperations };
