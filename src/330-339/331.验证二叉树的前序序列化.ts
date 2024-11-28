function isValidSerialization(preorder: string): boolean {
  const n = preorder.length;
  const stack: number[] = [1];
  let i = 0;
  while (i < n) {
    if (stack.length === 0) return false;

    if (preorder[i] === ",") {
      i++;
    } else if (preorder[i] === "#") {
      stack[stack.length - 1]--;
      if (stack[stack.length - 1] === 0) {
        stack.pop();
      }
      i++;
    } else {
      // 读取完整的数字
      while (i < n && preorder[i] !== ",") {
        i++;
      }
      stack[stack.length - 1]--;
      if (stack[stack.length - 1] === 0) {
        stack.pop();
      }
      stack.push(2);
    }
  }
  return stack.length === 0;
}

export { isValidSerialization };
