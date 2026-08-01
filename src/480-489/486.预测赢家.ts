function predictTheWinner(nums: number[]): boolean {
  return total(0, nums.length - 1, 1) >= 0;

  function total(start: number, end: number, turn: number): number {
    if (start === end) {
      return nums[start] * turn;
    }
    const scoreStart = nums[start] * turn + total(start + 1, end, -turn);
    const scoreEnd = nums[end] * turn + total(start, end - 1, -turn);
    return Math.max(scoreStart * turn, scoreEnd * turn) * turn;
  }
}

export {};
