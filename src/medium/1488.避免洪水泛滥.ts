function avoidFlood(rains: number[]): number[] {
  const n = rains.length;

  // 记录全部晴天的日期
  const zero: number[] = [];
  // 记录每个湖泊上一次下雨的日期
  const water = new Map<number, number>();

  const ans: number[] = new Array<number>(n).fill(-1);

  for (let i = 0; i < n; i++) {
    const rain = rains[i];

    // 遇到晴天时先不用管抽哪个湖
    if (rain === 0) {
      zero.push(i);
      continue;
    }

    // 当下雨时，湖泊已经水满了时，我们可以查询到上次下雨的日期
    const lastDate = water.get(rain);

    if (lastDate !== undefined) {
      // 通过这个日期在晴天记录中查找对应的晴天日期(二分)
      const index = binarySearch(zero, lastDate);
      // 如果找不到就不可避免的洪水了
      if (index === -1) return [];
      // 如果找到了，就可以使用那一天抽水
      ans[zero[index]] = rain;
      zero.splice(index, 1);
    }

    water.set(rain, i);
    ans[i] = -1;
  }

  // 要是有多余的没下雨的日子，就都设定为抽第一个湖的水，反正选择抽干一个空的湖泊将无事发生
  zero.forEach(i => (ans[i] = 1));

  return ans;
}

function binarySearch(arr: number[], target: number) {
  let left = 0,
    right = arr.length - 1;

  let ans = -1;

  while (left <= right) {
    const middle = left + ((right - left) >> 1);
    if (arr[middle] >= target) {
      ans = middle;
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return ans;
}

export { avoidFlood };
