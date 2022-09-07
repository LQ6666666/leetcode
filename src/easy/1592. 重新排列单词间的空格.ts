export { };

function reorderSpaces(text: string): string {
  // 统计 空格 个数，和 单词 个数
  let spaceCount = 0;
  const words: string[] = [];

  let temp = "";
  for (const ch of text) {
    if (ch === " ") {
      spaceCount++;

      if (temp !== "") {
        words.push(temp);
        temp = "";
      }
    } else {
      temp += ch;
    }
  }

  if (temp !== "") {
    words.push(temp);
    temp = "";
  }

  const wordCount = words.length;
  if (wordCount === 1) {
    return words[0] + " ".repeat(spaceCount)
  }

  // 计算每个间隔的空格个数
  const intervalCount = Math.floor(spaceCount / (wordCount - 1));
  // 剩下的空格个数
  const resetSpaceCount = spaceCount - (intervalCount * (wordCount - 1));

  const intervalSpace = " ".repeat(intervalCount);
  const restSpace = " ".repeat(resetSpaceCount);

  return words.join(intervalSpace) + restSpace;
};


console.log(reorderSpaces("  this   is  a sentence "));// "this   is   a   sentence"
console.log(reorderSpaces(" practice   makes   perfect"));// "practice   makes   perfect "
console.log(reorderSpaces("hello   world"));// "hello   world"
console.log(reorderSpaces("  walks  udp package   into  bar a"));// "walks  udp  package  into  bar  a "

console.log(reorderSpaces("  hello"));// "walks  udp  package  into  bar  a "

