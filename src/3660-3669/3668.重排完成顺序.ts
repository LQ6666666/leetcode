function recoverOrder(order: number[], friends: number[]): number[] {
  const set = new Set(friends);
  const ans: number[] = [];
  for (let i = 0; i < order.length; i++) {
    if (set.has(order[i])) {
      ans.push(order[i]);
    }
  }
  return ans;
}

export { recoverOrder };
