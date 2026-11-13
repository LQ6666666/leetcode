function breakfastNumber(staple: number[], drinks: number[], x: number): number {
  let sum = 0;
  staple.sort((a, b) => a - b);
  drinks.sort((a, b) => a - b);
  let right = drinks.length - 1;
  for (let i = 0; i < staple.length; i++) {
    right = binarySearch(staple[i], right);
    if (right === 0) {
      break;
    } else {
      sum = sum + right;
      right--;
    }
  }

  return sum % 1000000007;

  function binarySearch(num: number, right: number) {
    let left = 0;
    while (left <= right) {
      const middle = left + Math.floor((right - left) / 2);
      if (num + drinks[middle] > x) {
        right = middle - 1;
      } else if (num + drinks[middle] < x) {
        left = middle + 1;
      } else {
        left = middle + 1;
      }
    }
    return left;
  }
}

export {};
