function angleClock(hour: number, minutes: number): number {
  const a = (hour % 12) * (360 / 12) + (360 / 12) * (minutes / 60);
  const b = (minutes / 60) * 360;

  return Math.min(Math.abs(a - b), 360 - Math.abs(a - b));
}

export {};
