function findString(words: string[], s: string): number {
  let left = 0;
  let right = words.length;

  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);
    while (middle > left && words[middle] === "") {
      middle--;
    }

    const word = words[middle];

    if (word === s) {
      return middle;
    } else if (word < s) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

export {};
