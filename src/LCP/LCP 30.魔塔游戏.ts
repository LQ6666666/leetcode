import { MinPriorityQueue } from "@datastructures-js/priority-queue";

function magicTower(nums: number[]): number {
  if (nums.reduce((memo, num) => memo + num, 0) < 0) return -1;

  let ans = 0;
  let hp = 1;
  const h = new MinPriorityQueue<number>();
  for (const num of nums) {
    if (num < 0) {
      // 记录加过的小于 0 的血量
      h.enqueue(num);
    }
    hp += num;
    if (hp < 1) {
      ans++;
      // 取消之前减去的血量
      hp = hp + Math.abs(h.dequeue());
    }
  }
  return ans;
}

export { magicTower };
