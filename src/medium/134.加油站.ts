function canCompleteCircuit(gas: number[], cost: number[]): number {
  const n = gas.length;
  let i = 0;

  // 假设从 x 加油站出发经过 z 加油站最远能到达 y 加油站，那么从 z 加油站直接出发，不可能到达 y 下一个加油站
  // 如果从 x 出发到 z 加油站时肯定还有存储的油，这都到不了 y 的下一站，而直接从 z 出发刚开始是没有存储的油的，所以更不可能到达 y 的下一站
  while (i < n) {
    let sumOfGas = 0;
    let sumOfCost = 0;

    let count = 0;
    while (count < n) {
      let j = (i + count) % n;
      sumOfGas += gas[j];
      sumOfCost += cost[j];

      if (sumOfCost > sumOfGas) {
        break;
      }
      count++;
    }

    if (count === n) {
      return i;
    } else {
      i = i + count + 1;
    }
  }

  return -1;
}

export { canCompleteCircuit };
