function hanota(A: number[], B: number[], C: number[]): void {
  movePlate(A.length, A, B, C);
}

function movePlate(num: number, original: number[], auxiliary: number[], target: number[]) {
  if (num === 1) {
    target.push(original.pop()!);
    return;
  }
  movePlate(num - 1, original, target, auxiliary);
  target.push(original.pop()!);
  movePlate(num - 1, auxiliary, original, target);
}

export {};
