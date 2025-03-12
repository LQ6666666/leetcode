import { ListNode } from "@/utils";

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
  let minIndex = Number.MAX_SAFE_INTEGER;
  let maxIndex = Number.MIN_SAFE_INTEGER;
  let minDistance = Number.MAX_SAFE_INTEGER;
  let prevIndex = -1;
  let index = 0;
  let current = head;
  let prev: ListNode | null = null;
  while (current !== null) {
    const next = current.next;
    if (prev !== null && next !== null) {
      if (
        (current.val < prev.val && current.val < next.val) ||
        (current.val > prev.val && current.val > next.val)
      ) {
        minIndex = Math.min(minIndex, index);
        maxIndex = Math.max(maxIndex, index);

        if (prevIndex !== -1) {
          minDistance = Math.min(minDistance, index - prevIndex);
        }

        prevIndex = index;
      }
    }

    prev = current;
    current = next;
    index++;
  }

  if (
    maxIndex === Number.MAX_SAFE_INTEGER ||
    maxIndex === Number.MIN_SAFE_INTEGER ||
    minIndex === maxIndex
  ) {
    return [-1, -1];
  }

  return [minDistance, maxIndex - minIndex];
}

export { nodesBetweenCriticalPoints };
