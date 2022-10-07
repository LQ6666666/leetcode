function equalFrequency(word: string): boolean {
  // 统计单词个数
  let arr = new Array(26).fill(0);
  for (const letter of word) {
    arr[letter.charCodeAt(0) - 97]++;
  }
  arr = arr.filter(l => l > 0);

  if (counter(arr)) {
    if (arr[0] === 1 || arr.length === 1) return true
    else return false;
  };

  arr.sort((a, b) => a - b);

  for (const index of [0, arr.length - 1]) {
    arr[index]--;
    if (counter(arr)) return true;
    arr[index]++;
  }

  return false;
};

function counter(arr: number[]) {
  arr = arr.filter(l => l > 0);
  const n = arr.length;
  if (n === 0) return true;

  const target = arr[0];
  for (let i = 1; i < n; i++) {
    if (target !== arr[i]) {
      return false;
    }
  }
  return true;
}

export { };
