function minOperations(boxes: string): number[] {
  const n = boxes.length;
  const ans = new Array<number>(n).fill(0);

  // 前面遍历一遍
  let prev = 0;
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (boxes[i - 1] === "1") {
      count++;
    }
    ans[i] += prev + count;
    prev += count;
  }

  // 后面遍历一遍
  prev = 0;
  count = 0;
  for (let i = n - 2; i >= 0; i--) {
    if (boxes[i + 1] === "1") {
      count++;
    }

    ans[i] += prev + count;
    prev += count;
  }

  return ans;
}

// console.log(minOperations("110"));

export {};
