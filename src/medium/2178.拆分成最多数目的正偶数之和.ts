function maximumEvenSplit(finalSum: number): number[] {
  const ans: number[] = [];
  if (finalSum % 2 !== 0) return ans;

  let current = 2;
  while (finalSum >= current) {
    if (finalSum - current > current) {
      finalSum -= current;
      ans.push(current);
      current += 2;
    } else {
      ans.push(finalSum);
      break;
    }
  }

  return ans;
}

// 核心思想就是用一个`current`从`2`开始，一个个往上测试。
// 总共分两种情况：
// 1. 如果`finalSum`减去`curr_min`比`curr_min`大，则继续拆分。
// 2. 不满足`1`的情况就直接把数据加入即可。
// 以`12`举例，首先拆分成了`2`和`10`，然后`10`进一步拆分成`4`和`6`，`6`无法继续拆分，直接加入即可。
// 再以`28`举例：先拆分成`2`和`26`，随后`26`拆分成`4`和`22``，22`拆分成6和16，此时如果`16`想拆分就要从`8`开始，但是很显然如果拆成`8`和`8`就会出错。因此直接把`16`加入。

export { maximumEvenSplit };
