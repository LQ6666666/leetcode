function distMoney(money: number, children: number): number {
  if (money < children) return -1;

  // 先给每一人一元
  money -= children;
  // 接着，给尽可能多的人分配 7 元（加上前面分配的 1 元就是 8 元）
  let cnt = Math.min(Math.floor(money / 7), children);
  // cnt 就是有 8 元的人数(之前还有 1 元)，在减去元算出现在剩余的钱
  money -= cnt * 7;
  // 剩余的人
  children -= cnt;

  if (
    // 若剩余 0 个人，并且 money > 0 ，那么将所有的元分配给一个已经分到 8 元的人，令 cnt 减 1
    (children === 0 && money > 0) ||
    // 若剩余 1 个人，并且 money = 3，为了避免分到 4 元，并注意到题目输入中的 children >= 2 ，因此将这 3 美元拆成两部分，
    // 将其中的一部分分配给已经分到 8 美元的人，令 cnt 减 1
    (children === 1 && money === 3)
  ) {
    cnt -= 1;
  }

  return cnt;
}

export {};
