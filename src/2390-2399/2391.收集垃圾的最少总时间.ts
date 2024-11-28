function garbageCollection(garbage: string[], travel: number[]): number {
  const n = garbage.length;
  const prefix = new Array<[number, number, number]>(n + 1);
  prefix[0] = [0, 0, 0];

  for (let i = 0; i < n; i++) {
    const [M, P, G] = helper(garbage[i]);
    prefix[i + 1] = [prefix[i][0] + M, prefix[i][1] + P, prefix[i][2] + G];
  }

  let ans = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < n; j++) {
      if (prefix[n][i] - prefix[j + 1][i] === 0) {
        break;
      }
      ans += travel[j] ?? 0;
    }
  }

  return ans + prefix[n][0] + prefix[n][1] + prefix[n][2];
}

function helper(garbage: string): [number, number, number] {
  let M = 0;
  let P = 0;
  let G = 0;
  for (const ch of garbage) {
    if (ch === "M") {
      M++;
    } else if (ch === "P") {
      P++;
    } else {
      G++;
    }
  }
  return [M, P, G];
}

export { garbageCollection };
