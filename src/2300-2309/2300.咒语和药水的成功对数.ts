function successfulPairs(spells: number[], potions: number[], success: number): number[] {
  potions.sort((a, b) => a - b);
  const n = potions.length;
  return spells.map(spell => n - briarySearch(potions, spell, success));
}

function briarySearch(arr: number[], spell: number, success: number): number {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const middle = left + ((right - left) >> 1);
    if (arr[middle] * spell >= success) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return left;
}

export { successfulPairs };
