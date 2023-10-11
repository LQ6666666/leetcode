function topStudents(
  positive_feedback: string[],
  negative_feedback: string[],
  report: string[],
  student_id: number[],
  k: number
): number[] {
  const map = new Map<string, number>();
  for (const word of positive_feedback) {
    map.set(word, 3);
  }
  for (const word of negative_feedback) {
    map.set(word, -1);
  }

  const ans: [score: number, id: number][] = [];
  const n = student_id.length;
  for (let i = 0; i < n; i++) {
    const words = report[i].split(" ");
    let score = 0;
    for (const word of words) {
      score += map.get(word) ?? 0;
    }
    ans.push([score, student_id[i]]);
  }

  ans.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));
  return ans.slice(0, k).map(([, id]) => id);
}

export {};
