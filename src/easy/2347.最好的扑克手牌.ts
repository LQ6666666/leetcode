function bestHand(ranks: number[], suits: string[]): string {
  const suit = suits[0];
  if (suits.every(s => s === suit)) return "Flush";

  const counts = new Array<number>(14).fill(0);

  let ans = "High Card";
  for (const rank of ranks) {
    const c = ++counts[rank];

    if (c === 3) return "Three of a Kind";

    if (c === 2) {
      ans = "Pair";
    }
  }

  return ans;
}

export {};
