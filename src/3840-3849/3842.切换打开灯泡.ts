function toggleLightBulbs(bulbs: number[]): number[] {
  const set = new Set<number>();

  for (const bulb of bulbs) {
    if (set.has(bulb)) {
      set.delete(bulb);
    } else {
      set.add(bulb);
    }
  }

  return Array.from(set).sort((a, b) => a - b);
}

export {};
