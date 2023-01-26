function sortTheStudents1(score: number[][], k: number): number[][] {
  return score.sort((a, b) => b[k] - a[k]);
}

function sortTheStudents(score: number[][], k: number): number[][] {
  return quickSort(score, k);
}

function quickSort(score: number[][], k: number): number[][] {
  const n = score.length;
  if (n === 0) return [];

  const middleIndex = n >> 1;
  const middle = score[middleIndex][k];

  const leftArray: number[][] = [];
  const middleArray: number[][] = [];
  const rightArray: number[][] = [];

  for (const item of score) {
    const point = item[k];
    if (point === middle) {
      middleArray.push(item);
    } else if (point > middle) {
      leftArray.push(item);
    } else {
      rightArray.push(item);
    }
  }

  return quickSort(leftArray, k).concat(middleArray).concat(quickSort(rightArray, k));
}

export { sortTheStudents };
