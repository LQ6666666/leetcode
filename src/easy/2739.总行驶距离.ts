function distanceTraveled(mainTank: number, additionalTank: number): number {
  let ans = 0;

  let tank = mainTank;
  let i = 0;
  while (tank > 0) {
    ans += 10;
    tank--;
    i++;

    if (i === 5) {
      i = 0;

      if (additionalTank > 0) {
        additionalTank--;
        tank++;
      }
    }
  }

  return ans;
}

export {};
