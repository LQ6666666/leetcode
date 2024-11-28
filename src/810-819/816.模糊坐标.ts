function ambiguousCoordinates(s: string): string[] {
  // 先将原字符串 s 中的左右括号去掉
  // 重新定义后的 s 长度为 n
  s = s.slice(1, -1);
  const n = s.length;
  const ans: string[] = [];

  // 随后枚举逗号的位置 idx，枚举范围为 [0, n - 1)，含义为在 s[idx] 后面追加逗号
  for (let i = 0; i < n - 1; i++) {
    // 此时左边部分字符串为 s[0, idx]，右边部分字符串为 s[idx + 1, n - 1]
    const a = search(s, 0, i);
    const b = search(s, i + 1, n - 1);

    for (const x of a) {
      for (const y of b) {
        ans.push(`(${x}, ${y})`);
      }
    }
  }

  return ans;

  // 实现一个搜索函数，该函数返回使用字符串 s[start...end] 构造的具体数值集合
  // 假设左边字符串 s[0, idx] 搜索结果为 A，右边字符串 s[idx + 1, n - 1] 搜索结果为 B
  // 根据「乘法原理」，可知所有实际方案为 (x, y) 其中 x ∈ A，y ∈ B
  // 枚举字符串追加小数点的位置 idx，枚举范围为 [start, end - 1)，含义为在 sub[idx] 后面追加小数点
  // 小数点前面的部分不能包含前导零，小数点后面的部分不能包含后导零。
  // 注意记得把不添加小数点的合法方案也存入搜索集合
  function search(s: string, start: number, end: number): string[] {
    const ans: string[] = [];
    if (start === end || s[start] !== "0") {
      ans.push(s.slice(start, end + 1));
    }

    for (let i = start; i < end; i++) {
      const a = s.slice(start, i + 1);
      const b = s.slice(i + 1, end + 1);

      if (a.length > 1 && a[0] === "0") {
        continue;
      }

      if (b[b.length - 1] === "0") {
        continue;
      }

      ans.push(a + "." + b);
    }

    return ans;
  }
}

export { ambiguousCoordinates };
