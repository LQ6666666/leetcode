function numFactoredBinaryTrees(arr: number[]): number {
  arr.sort((a, b) => a - b);
  const map = new Map<number, number>();
  let ans = 0;

  for (const num of arr) {
    // 每个数本身就是一个具有一个节点的二叉树， 因此首先要 +1
    let count = 1;
    map.forEach((value, key) => {
      if (num % key === 0 && map.has(num / key)) {
        // 二者的乘积就是这两个因数所能组成的二叉树个数
        count += value * map.get(num / key)!;
      }
    });

    map.set(num, count);
    ans += count;
  }

  return ans % (1e9 + 7);
}

export { numFactoredBinaryTrees };
