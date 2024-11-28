function minimumRefill(plants: number[], capacityA: number, capacityB: number): number {
  const n = plants.length;
  let i = 0;
  let j = n - 1;
  let ans = 0;

  let waterA = capacityA;
  let waterB = capacityB;

  while (i < j) {
    if (waterA >= plants[i]) {
      waterA -= plants[i];
    } else {
      waterA = capacityA - plants[i];
      ans++;
    }
    i++;

    if (waterB >= plants[j]) {
      waterB -= plants[j];
    } else {
      waterB = capacityB - plants[j];
      ans++;
    }
    j--;
  }

  if (i === j) {
    if (plants[i] > waterA && plants[i] > waterB) {
      ans++;
    }
  }

  return ans;
}

export {};
