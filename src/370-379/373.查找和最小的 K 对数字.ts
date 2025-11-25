import { MinPriorityQueue } from "@datastructures-js/priority-queue";

function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
  const pq = new MinPriorityQueue<[u: number, v: number]>(([u, v]) => nums1[u] + nums2[v]);

  const ans = new Array<number[]>();
  const m = nums1.length;
  const n = nums2.length;
  for (let i = 0; i < Math.min(m, k); i++) {
    pq.enqueue([i, 0]);
  }
  while (k > 0 && !pq.isEmpty()) {
    const [u, v] = pq.dequeue()!;
    ans.push([nums1[u], nums2[v]]);
    if (v + 1 < n) {
      pq.enqueue([u, v + 1]);
    }

    k--;
  }
  return ans;
}

export {};
