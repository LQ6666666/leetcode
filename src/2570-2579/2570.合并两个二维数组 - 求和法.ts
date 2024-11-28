type Item = [id: number, val: number];

function mergeArrays(nums1: Item[], nums2: Item[]): number[][] {
  const n = nums1.length;
  const m = nums2.length;
  const ans: Item[] = [];

  let i = 0,
    j = 0;

  while (i < n && j < m) {
    const num1 = nums1[i];
    const num2 = nums2[j];

    if (num1[0] > num2[0]) {
      ans.push(num2);
      j++;
    } else if (num1[0] < num2[0]) {
      ans.push(num1);
      i++;
    } else if (num1[0] === num2[0]) {
      ans.push([num1[0], num1[1] + num2[1]]);
      i++, j++;
    }
  }

  while (i < n) ans.push(nums1[i++]);
  while (j < m) ans.push(nums2[j++]);

  return ans;
}
export {};
