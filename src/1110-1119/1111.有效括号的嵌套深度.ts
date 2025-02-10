function maxDepthAfterSplit(seq: string): number[] {
  let dep = 0;

  return seq.split("").map(value => {
    if (value === "(") {
      ++dep;
      return dep % 2;
    } else {
      let ans = dep % 2;
      --dep;
      return ans;
    }
  });
}

export { maxDepthAfterSplit };
