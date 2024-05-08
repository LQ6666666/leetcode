function wateringPlants(plants: number[], capacity: number): number {
  const n = plants.length;
  let ans = 0;
  let water = capacity;
  let i = 0;
  while (i < n) {
    if (water >= plants[i]) {
      ans++;
      water -= plants[i];
    } else {
      ans += i * 2 + 1;
      water = capacity - plants[i];
    }

    i++;
  }

  return ans;
}

export { wateringPlants };
