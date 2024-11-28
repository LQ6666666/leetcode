function partitionLabels(s: string): number[] {
  const n = s.length;
  // 遍历之后，每个元素显示的都是最后出现的位置，因为后面覆盖前面的了
  const last = new Array<number>(26);
  for (let i = 0; i < n; i++) {
    last[s.charCodeAt(i) - 97] = i;
  }

  const ans: number[] = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < n; i++) {
    // end 每次遇到新的字符的时候，需要更新一个区间最后位置
    end = Math.max(end, last[s.charCodeAt(i) - 97]);
    // 如果 i 等于 end，说明这个区间走到末尾了，那么就可以将这段长度添加到列表中，并且移动到新的区间了
    if (end === i) {
      ans.push(end - start + 1);
      start = end + 1;
    }
  }

  return ans;
}

export { partitionLabels };
