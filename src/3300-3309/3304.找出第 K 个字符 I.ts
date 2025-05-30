function kthCharacter(k: number): string {
  let word = "a";

  while (word.length < k) {
    let temp = "";
    for (let i = 0; i < word.length; i++) {
      temp += String.fromCharCode(word.charCodeAt(i) + 1);
    }
    word += temp;
  }
  return word[k - 1];
}

export { kthCharacter };
