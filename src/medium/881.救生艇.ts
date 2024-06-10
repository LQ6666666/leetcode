function numRescueBoats(people: number[], limit: number): number {
  people.sort((a, b) => b - a);
  let i = 0;
  let j = people.length - 1;

  let ans = 0;
  while (i <= j) {
    if (people[i] < limit) {
      if (people[i] + people[j] <= limit) {
        i++;
        j--;
      } else {
        i++;
      }
      ans++;
    } else if (people[i] === limit) {
      ans++;
      i++;
    }
  }
  return ans;
}

export { numRescueBoats };
