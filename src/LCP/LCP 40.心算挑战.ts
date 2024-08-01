function maxmiumScore$(cards: number[], cnt: number): number {
  const n = cards.length;

  // 1. 排序
  cards.sort((a, b) => a - b);

  // 2. 计算最后 cnt 个数之和
  const part = cards.slice(-cnt);
  let total = part.reduce((prev, cur) => prev + cur);

  // 3. 判断是否是偶数
  if (total % 2 === 0) {
    return total;
  }

  // 4. 找到之后最小的奇数和最小的偶数
  let minOdd: number | undefined;
  let minEven: number | undefined;
  for (const item of part) {
    if (item % 2 === 0) {
      if (minEven === undefined) {
        minEven = item;
      }
    } else {
      if (minOdd === undefined) {
        minOdd = item;
      }
    }

    if (minOdd !== undefined && minEven !== undefined) {
      break;
    }
  }

  // 5.找到之前最大的偶数，和最大的奇数
  let maxOdd: number | undefined;
  let maxEven: number | undefined;
  for (let i = n - cnt - 1; i >= 0; i--) {
    const item = cards[i];

    if (item % 2 === 0) {
      if (maxEven === undefined) {
        maxEven = item;
      }
    } else {
      if (maxOdd === undefined) {
        maxOdd = item;
      }
    }

    if (maxOdd !== undefined && maxEven !== undefined) {
      break;
    }
  }

  let res1 = Number.MIN_SAFE_INTEGER;
  // 6. 减去最小的偶数 + 最大的奇数
  if (minEven !== undefined && maxOdd !== undefined) {
    res1 = total - minEven + maxOdd;
  }

  let res2 = Number.MIN_SAFE_INTEGER;
  // 7. 减去最小的奇数 + 最大的偶数
  if (minOdd !== undefined && maxEven !== undefined) {
    res2 = total - minOdd + maxEven;
  }

  if (res1 === Number.MIN_SAFE_INTEGER && res1 === res2) {
    return 0;
  }

  return Math.max(res1, res2);
}

function maxmiumScore(cards: number[], cnt: number): number {
  const n = cards.length;
  cards.sort((a, b) => b - a);

  let s = 0;
  for (let i = 0; i < cnt; i++) {
    s += cards[i];
  }

  // 如果 s 是偶数，这是我们能得到的最大得分，直接返回 s
  if (s % 2 === 0) return s;

  // 如果 s 是奇数，那么可以：
  // 从前 cnt 个数中去掉一个最小的奇数，从后 n − cnt 个数中加进来一个最大的偶数，这样得分就变成偶数了。
  // 从前 cnt 个数中去掉一个最小的偶数，从后 n − cnt 个数中加进来一个最大的奇数，这样得分就变成偶数了。
  let minOdd: number = Number.MAX_SAFE_INTEGER;
  let minEven: number = Number.MAX_SAFE_INTEGER;
  for (let i = cnt - 1; i >= 0; i--) {
    const card = cards[i];
    if (card % 2 === 0) {
      minEven = Math.min(minEven, card);
    } else {
      minOdd = Math.min(minOdd, card);
    }

    if (minOdd !== Number.MAX_SAFE_INTEGER && minEven !== Number.MAX_SAFE_INTEGER) {
      break;
    }
  }

  let maxOdd: number = Number.MIN_SAFE_INTEGER;
  let maxEven: number = Number.MIN_SAFE_INTEGER;
  for (let i = cnt; i < n; i++) {
    const card = cards[i];
    if (card % 2 === 0) {
      maxEven = Math.max(maxEven, card);
    } else {
      maxOdd = Math.max(maxOdd, card);
    }

    if (maxOdd !== Number.MIN_SAFE_INTEGER && maxEven !== Number.MIN_SAFE_INTEGER) {
      break;
    }
  }

  let res1 = Number.MIN_SAFE_INTEGER;
  if (minOdd !== Number.MAX_SAFE_INTEGER && maxEven !== Number.MIN_SAFE_INTEGER) {
    res1 = s - minOdd + maxEven;
  }

  let res2 = Number.MIN_SAFE_INTEGER;
  if (minEven !== Number.MAX_SAFE_INTEGER && maxOdd !== Number.MIN_SAFE_INTEGER) {
    res2 = s - minEven + maxOdd;
  }

  // 两种情况取最大值
  return Math.max(res1, res2, 0);
}

export {};
