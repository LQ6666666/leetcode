function reverseWords(s: string): string {
  const arr = s.split(" ");
  const count = helper(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    const word = arr[i];
    if (count === helper(word)) {
      arr[i] = reverse(word);
    }
  }
  return arr.join(" ");
}

const vowelSet = new Set<string>();
vowelSet.add("a");
vowelSet.add("e");
vowelSet.add("i");
vowelSet.add("o");
vowelSet.add("u");

function helper(word: string) {
  const n = word.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (vowelSet.has(word[i])) {
      count++;
    }
  }
  return count;
}

function reverse(word: string) {
  const n = word.length;
  let res = "";
  for (let i = 0; i < n; i++) {
    res = word[i] + res;
  }
  return res;
}

export {};
