function checkPowersOfThree(n: number): boolean {
  // 将 n 表示成若干个不同的三的幂之和
  // 即 3 的不同幂次可出现  0次或 1 次
  // 即 n 的三进制表示中只有 0 和 1，没有 2

  let x = n;
  while (x > 0) {
    if (x % 3 === 2) {
      return false;
    }

    x = Math.floor(x / 3);
  }

  return true;
}

// console.log(checkPowersOfThree(12));

export { checkPowersOfThree };
