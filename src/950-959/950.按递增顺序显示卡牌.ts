function deckRevealedIncreasing(deck: number[]): number[] {
  const n = deck.length;
  const map = new Map<number, number>();
  const d = deck.concat();
  let idx = 0;
  while (d.length > 0) {
    map.set(d.shift()!, idx++);
    if (d.length > 0) {
      d.push(d.shift()!);
    }
  }
  const ans = new Array<number>(n);
  const temp = deck.concat().sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    ans[i] = temp[map.get(deck[i])!];
  }
  return ans;
}

export { deckRevealedIncreasing };
