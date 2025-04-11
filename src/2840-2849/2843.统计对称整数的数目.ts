// function countSymmetricIntegers(low: number, high: number): number {
//   let ans = 0;
//   for (let i = low; i <= high; i++) {
//     const s = i.toString();
//     if (s.length % 2 !== 0) continue;

//     const m = s.length / 2;
//     let left = 0;
//     for (let j = 0; j < m; j++) {
//       left += +s[j];
//     }

//     let right = 0;
//     for (let j = m; j < s.length; j++) {
//       right += +s[j];
//     }

//     if (left === right) {
//       ans++;
//     }
//   }
//   return ans;
// }

function countSymmetricIntegers(low: number, high: number): number {
  let ans = 0;
  for (let i = low; i <= high; i++) {
    if (check(i)) {
      ans++;
    }
  }
  return ans;
}

function check(num: number): boolean {
  const nums: number[] = [];

  let x = num;
  while (x) {
    nums.push(x % 10);
    x = Math.floor(x / 10);
  }

  const n = nums.length;
  if (n % 2 !== 0) return false;

  const m = nums.length / 2;
  let left = 0;
  let right = 0;

  for (let i = 0; i < m; i++) {
    left += nums[i];
    right += nums[n - i - 1];
  }

  return left === right;
}

export { countSymmetricIntegers };
