function countStudents(students: number[], sandwiches: number[]): number {
  let roundCount = 0,
    squareCount = 0;

  for (const shape of students) {
    if (shape === 0) {
      roundCount++;
    } else {
      squareCount++;
    }
  }

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
