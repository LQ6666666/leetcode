import { ListNode } from "@/utils";

function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
  const ans = Array.from({ length: m }, () => new Array<number>(n).fill(-1));

  let startI = 0;
  let startJ = 0;
  let left = 0;
  let right = n;
  let top = 0;
  let bottom = m;

  let node = head;
  while (node !== null) {
    while (startJ < right && node !== null) {
      ans[startI][startJ] = node.val;
      startJ++;
      node = node.next;
    }

    startJ--;
    startI++;
    while (startI < bottom && node !== null) {
      ans[startI][startJ] = node.val;
      startI++;
      node = node.next;
    }

    startJ--;
    startI--;
    while (startJ >= left && node !== null) {
      ans[startI][startJ] = node.val;
      startJ--;
      node = node.next;
    }

    startJ++;
    startI--;
    while (startI > top && node !== null) {
      ans[startI][startJ] = node.val;
      startI--;
      node = node.next;
    }

    startI++;
    startJ++;

    top++;
    right--;
    left++;
    bottom--;
  }

  return ans;
}

export { spiralMatrix };
