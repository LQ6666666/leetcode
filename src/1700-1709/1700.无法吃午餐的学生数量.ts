function countStudents(students: number[], sandwiches: number[]): number {
  const n = sandwiches.length;
  let roundCount = 0;
  let squareCount = 0;

  for (const shape of students) {
    squareCount += shape;
  }
  roundCount = n - squareCount;

  for (const shape of sandwiches) {
    if (shape === 0) {
      if (roundCount === 0) {
        return squareCount;
      }

      roundCount--;
    } else {
      if (squareCount === 0) {
        return roundCount;
      }

      squareCount--;
    }
  }

  return 0;
}

export {};
