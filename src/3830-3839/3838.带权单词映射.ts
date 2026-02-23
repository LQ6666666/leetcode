function mapWordWeights(words: string[], weights: number[]): string {
  let ans = "";
  for (const word of words) {
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
      sum += weights[word.charCodeAt(i) - 97];
    }
    ans += String.fromCharCode(25 - (sum % 26) + 97);
  }
  return ans;
}

export {};
