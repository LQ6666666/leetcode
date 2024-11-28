import { PriorityQueue } from "@datastructures-js/priority-queue";

function totalCost(costs: number[], k: number, candidates: number): number {
  // 就是将 costs 数组前后分成 candidate 大小的两部分
  // 每次取两部分中最小的一个，然后保持 candidate 大小
  // 哪里取了就往哪里加入，如果没的加了就不用保持大小了
  const n = costs.length;

  const queue = new PriorityQueue<[cost: number, id: number]>(([costA, idA], [costB, idB]) => {
    if (costA === costB) {
      return idA - idB;
    } else {
      return costA - costB;
    }
  });

  let left = candidates - 1;
  let right = n - candidates;
  if (left + 1 < right) {
    for (let i = 0; i <= left; i++) {
      queue.enqueue([costs[i], i]);
    }
    for (let i = right; i < n; i++) {
      queue.enqueue([costs[i], i]);
    }
  } else {
    for (let i = 0; i < n; i++) {
      queue.enqueue([costs[i], i]);
    }
  }

  let ans = 0;
  for (let i = 0; i < k; i++) {
    const [cost, id] = queue.dequeue();
    ans += cost;
    if (left + 1 < right) {
      if (id <= left) {
        left++;
        queue.enqueue([costs[left], left]);
      } else {
        right--;
        queue.enqueue([costs[right], right]);
      }
    }
  }

  return ans;
}

export { totalCost };
