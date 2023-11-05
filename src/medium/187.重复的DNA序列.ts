function findRepeatedDnaSequences$(s: string): string[] {
  const length: number = s.length;

  if (length <= 10) {
    return [];
  }

  const result: string[] = [];
  const map: Map<string, number> = new Map<string, number>();

  let i = 0;

  while (i !== length - 9) {
    const str: string = s.substring(i, i + 10);

    if (map.has(str)) {
      map.set(str, map.get(str)! + 1);
    } else {
      map.set(str, 0);
    }

    i++;
  }

  map.forEach((value, key) => {
    value > 0 && result.push(key);
  });

  return result;
}

function findRepeatedDnaSequences(s: string): string[] {
  const n = s.length;
  const ans: string[] = [];
  const map = new Map<string, number>();

  for (let i = 0; i <= n - 10; i++) {
    const sub = s.slice(i, i + 10);
    const count = (map.get(sub) ?? 0) + 1;
    map.set(sub, count);
    if (count === 2) {
      ans.push(sub);
    }
  }

  return ans;
}

console.time();
console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
console.timeEnd();

export {};
