function subarrayLCM(nums: number[], k: number): number {
  const n = nums.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let x = nums[i];
    for (let j = i; j < n; j++) {
      x = lcm(x, nums[j]);
      if (x > k) {
        break;
      } else if (x === k) {
        ans++;
      }
    }
  }
  return ans;
}
// 因为 a * b == 最小公倍数 * 最大公约数
// 所以最小公倍数 == a * b / 最大公约数

// 最小公倍数
function lcm(m: number, n: number) {
  return (m * n) / gcd(m, n);
}

// 最大公约数
function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

export { subarrayLCM };
