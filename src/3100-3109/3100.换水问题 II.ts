function maxBottlesDrunk(numBottles: number, numExchange: number): number {
  if (numBottles < numExchange) return numBottles;

  let counter = 0;
  while (numBottles >= numExchange) {
    counter += numExchange;
    numBottles -= numExchange;
    numBottles++;
    numExchange++;
  }

  return counter + numBottles;
}

export { maxBottlesDrunk };
