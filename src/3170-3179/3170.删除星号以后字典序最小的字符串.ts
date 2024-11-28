import { PriorityQueue } from "@datastructures-js/priority-queue";

function clearStars(s: string): string {
  const n = s.length;
  const deleteIndexSet = new Set<number>();
  const pq = new PriorityQueue<number>((a, b) => {
    // 删除字典序最小的
    // 一样就删除索引最大的
    if (s[a] === s[b]) {
      return b - a;
    } else {
      return s[a].charCodeAt(0) - s[b].charCodeAt(0);
    }
  });

  for (let i = 0; i < n; i++) {
    const c = s[i];

    if (c === "*") {
      deleteIndexSet.add(i);
      deleteIndexSet.add(pq.dequeue());
    } else {
      pq.enqueue(i);
    }
  }

  let ans = "";
  for (let i = 0; i < n; i++) {
    if (!deleteIndexSet.has(i)) {
      ans += s[i];
    }
  }

  return ans;
}

/**
function clearStars(s: string): string {
  const n = s.length;
  const deleteIndexSet = new Set<number>();
  const pq = new PriorityQueue({
    compare: (a, b) => {
      // 删除字典序最小的
      // 一样就删除索引最大的
      if (s[a] === s[b]) {
        return b - a;
      } else {
        return s[a].charCodeAt(0) - s[b].charCodeAt(0);
      }
    }
  });

  for (let i = 0; i < n; i++) {
    const c = s[i];

    if (c === "*") {
      deleteIndexSet.add(i);
      deleteIndexSet.add(pq.dequeue());
    } else {
      pq.enqueue(i);
    }
  }

  let ans = "";
  for (let i = 0; i < n; i++) {
    if (!deleteIndexSet.has(i)) {
      ans += s[i];
    }
  }

  return ans;
}
 */

console.log(clearStars("aaba*"));
console.log(clearStars("aaba**"));
console.log(clearStars("abc"));

export { clearStars };
