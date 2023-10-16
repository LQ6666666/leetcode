function singleNumber(nums: number[]): number[] {
  const eor = nums.reduce((a, b) => a ^ b, 0);

  // 取出最后一个 1
  // 2 = 0b10           2 & -2 = 0b10
  // 200 = 11001000     200 &- 200 = 0b1000
  const x = eor & -eor;

  let num1 = 0;
  let num2 = 0;
  for (const num of nums) {
    if (num & x) {
      num1 ^= num;
    } else {
      num2 ^= num;
    }
  }

  return [num1, num2];
}

/**
由于除了两个数字出现了一次，其他数字都出现了两次。根据异或运算的性质：
  两个相同的数异或结果为 0，一个数与 0 异或还是它自己，异或运算满足交换律
把 nums 中的元素全部异或起来的结果 eor 就是那两个只出现一次的数字的异或结果。
而这两个数不相同，意味着 eor 至少有一位是 1，我们可以用 lowbit 运算拿到最低位的 1
然后遍历 nums 数组，将所有数 nums[i] 按照这一位是不是 1 分成两类，初始化 num1 = num2 = 0
  1.如果当前位是 1，就将 nums[i] 异或到 num1 上
  2.如果当前位是 0，就将 nums[i] 异或到 num 上
这样一来，两个只出现一次的数就会被分别异或到 num1 和 num2 上，
而其他数也会被分别异或到这两个数上。而由于其他数都出现了两次，
所以最终它们就会被异或成 0 ，num1 和 num2 ​就是那两个只出现一次的数
*/

export {};
