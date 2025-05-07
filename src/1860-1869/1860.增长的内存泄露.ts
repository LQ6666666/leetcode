function memLeak(memory1: number, memory2: number): number[] {
  let i = 1;
  while (memory1 >= i || memory2 >= i) {
    if (memory1 >= i && memory1 >= memory2) {
      memory1 -= i;
    } else {
      memory2 -= i;
    }

    i++;
  }
  return [i, memory1, memory2];
}

export {};
