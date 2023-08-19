function convertTime(current: string, correct: string): number {
  let diff = helper(correct) - helper(current);
  let count = 0;

  while (diff > 0) {
    if (diff - 60 >= 0) {
      diff -= 60;
    } else if (diff - 15 >= 0) {
      diff -= 15;
    } else if (diff - 5 >= 0) {
      diff -= 5;
    } else {
      diff--;
    }

    count++;
  }

  return count;
}

function helper(time: string) {
  const [h, m] = time.split(":");
  return +h * 60 + +m;
}

export {};
