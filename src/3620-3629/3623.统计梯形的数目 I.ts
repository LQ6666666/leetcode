import { MOD } from "@/utils";

function countTrapezoids(points: number[][]): number {
  const map = new Map<number, number>();
  for (const [, y] of points) {
    map.set(y, (map.get(y) ?? 0) + 1);
  }

  let sum = 0n;
  let ans = 0n;
  map.forEach(num => {
    const edge = (BigInt(num) * BigInt(num - 1)) / 2n;
    ans += (edge * sum) % BigInt(MOD);
    sum += edge;
  });

  return Number(ans) % MOD;
}

export {};
