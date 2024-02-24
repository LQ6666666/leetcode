function halfQuestions(questions: number[]): number {
  const map = new Map<number, number>();

  for (const question of questions) {
    map.set(question, (map.get(question) ?? 0) + 1);
  }

  const values = Array.from(map.values()).sort((a, b) => b - a);
  let ans = 0;
  let k = questions.length / 2;

  while (ans < values.length && k > 0) {
    k -= values[ans++];
  }

  return ans;
}

export { halfQuestions };
