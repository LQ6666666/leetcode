// 利用 map 有序
function customSortString1(order: string, s: string): string {
  const map = new Map<string, number>();

  for (const ch of s) {
    map.set(ch, (map.get(ch) ?? 0) + 1);
  }

  let ans = "";
  for (const ch of order) {
    const count = map.get(ch);

    if (count) {
      ans += ch.padStart(count, ch);
      map.delete(ch);
    }
  }

  map.forEach((value, key) => {
    ans += key.padStart(value, key);
  });

  return ans;
}

function customSortString(order: string, s: string): string {
  const n = order.length;
  const arr = new Array(26).fill(0);
  // 记录每个字符的个数
  for (const ch of s) {
    arr[ch.charCodeAt(0) - 97]++;
  }

  let ans = "";
  // order 中给出的顺序
  for (let i = 0; i < n; i++) {
    const ch = order[i];
    const count = arr[ch.charCodeAt(0) - 97];
    if (count) {
      ans += ch.repeat(count);
    }
    arr[ch.charCodeAt(0) - 97] = 0;
  }

  // order 中没有的字符，按照原来的顺序遍历
  for (let i = 0; i < 26; i++) {
    const count = arr[i];
    if (count) {
      ans += String.fromCharCode(i + 97).repeat(count);
    }
  }

  return ans;
}

export { customSortString };
