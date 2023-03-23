function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
  const n = l.length;
  const ans = new Array<boolean>(n);

  const sortFn = (a: number, b: number) => a - b;

  for (let i = 0; i < n; i++) {
    const left = l[i];
    const right = r[i];

    const children = nums.slice(left, right + 1);
    children.sort(sortFn);

    let flag = true;
    const d = children[1] - children[0];
    for (let j = 2; j < children.length; j++) {
      if (children[j] - children[j - 1] !== d) {
        flag = false;
        break;
      }
    }

    ans[i] = flag;
  }

  return ans;
}


export {};
