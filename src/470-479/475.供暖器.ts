function findRadius(houses: number[], heaters: number[]): number {
  houses.sort((a, b) => a - b);
  heaters.sort((a, b) => a - b);

  let ans = 0;
  for (const house of houses) {
    const i = binarySearch(heaters, house);
    const j = i + 1;
    const leftDistance = i < 0 ? Number.MAX_VALUE : house - heaters[i];
    const rightDistance = j >= heaters.length ? Number.MAX_VALUE : heaters[j] - house;
    const curDistance = Math.min(leftDistance, rightDistance);
    ans = Math.max(ans, curDistance);
  }

  return ans;
}

function binarySearch(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  if (nums[left] > target) {
    return -1;
  }

  while (left < right) {
    const middle = left + Math.floor((right - left) / 2);
    if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle;
    }
  }

  return left;
}

export {};
