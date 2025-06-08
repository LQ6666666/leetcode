function stringSequence(target: string): string[] {
  let index = 0;
  const temp: string[] = ["a"];
  const ans: string[] = ["a"];
  while (ans[ans.length - 1] !== target) {
    if (target[index] === temp[index]) {
      temp.push("a");
      index++;
    } else {
      temp[index] = String.fromCharCode(temp[index].charCodeAt(0) + 1);
    }
    ans.push(temp.join(""));
  }
  return ans;
}

export { stringSequence };
