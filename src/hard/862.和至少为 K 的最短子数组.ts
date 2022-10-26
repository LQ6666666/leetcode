// 暴力过不去
function shortestSubarray1(nums: number[], k: number): number {
  const n = nums.length;
  let ans = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    let count = 0;
    for (let j = i; j < n; j++) {
      sum += nums[j];
      count++;
      if (sum >= k) {
        ans = Math.min(ans, count);
        break;
      } else if (count > ans) {
        break;
      }
    }
  }
  return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
}
/**
 * 例如 nums=[1,2,−1,2]，对应的前缀和数组为 s=[0,1,3,2,4]
 * 通过前缀和，我们可以把子数组的和转换成两个前缀和的差，即
 * 例如  nums 的子数组 [2,-1,2] 的和就可以用 s[4]−s[1]=4−1=3 算出来
 */

function shortestSubarray(nums: number[], k: number): number {
  const n = nums.length;
  const preSumArr = new Array<number>(n + 1).fill(0);
  // 从 0 开始 [1,2,3] => [0,1,3,6]
  for (let i = 0; i < n; i++) {
    preSumArr[i + 1] = preSumArr[i] + nums[i];
  }

  let res = n + 1;
  // 双端队列 放的是下标数组
  const queue: number[] = [];

  for (let i = 0; i <= n; i++) {
    // 取出当前下标之前的和
    const curSum = preSumArr[i];
    while (queue.length !== 0 && curSum - preSumArr[queue[0]] >= k) {
      res = Math.min(res, i - queue.shift()!);
    }

    while (queue.length !== 0 && preSumArr[queue[queue.length - 1]] >= curSum) {
      queue.pop();
    }

    // 添加下标
    queue.push(i);
  }
  return res < n + 1 ? res : -1;
}

export { shortestSubarray };
