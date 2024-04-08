function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>();
  const stack: number[] = [];
  for (let i = nums2.length - 1; i >= 0; --i) {
    const num = nums2[i];
    while (stack.length && num >= stack[stack.length - 1]) {
      stack.pop();
    }

    map.set(num, stack.at(-1) ?? -1);
    stack.push(num);
  }

  const ans = new Array<number>(nums1.length);
  for (let i = 0; i < nums1.length; i++) {
    ans[i] = map.get(nums1[i])!;
  }

  return ans;
}

export { nextGreaterElement };
