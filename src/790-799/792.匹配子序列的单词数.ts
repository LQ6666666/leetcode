function numMatchingSubseq(s: string, words: string[]): number {
  const n = s.length;
  // 对于 s = abcabc 而言，预处理的哈希表为 {a=[0,3], b=[1,4], c=[2,5]}
  const map: Map<string, number[]> = new Map();

  for (let i = 0; i < n; i++) {
    const value = map.get(s[i]) ?? [];
    value.push(i);
    map.set(s[i], value);
  }

  let ans = 0;
  for (const word of words) {
    let flag = true;

    const m = word.length;
    let pre = -1;
    for (let i = 0; i < m && flag; i++) {
      const list = map.get(word[i]);

      if (list) {
        // 二分查找所有出现字符 word[i] 的位置中，第一个比当前位置 idx 大的位置
        const right = binarySearch(list, pre);
        const next = list[right];

        //当当前的下标大于本字符在 s 中的位置时或本字符在 s 中不存在时，则表明匹配不成功
        if (right < 0 || next <= pre) {
          flag = false;
        } else {
          pre = next;
        }
      } else {
        flag = false;
      }
    }

    if (flag) ans++;
  }

  return ans;
}

function binarySearch(arr: number[], target: number) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    const middle = left + ((right - left) >>> 1);

    if (arr[middle] > target) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  return right;
}

export {};
