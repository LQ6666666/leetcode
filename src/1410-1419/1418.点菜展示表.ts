function displayTable(orders: string[][]): string[][] {
  const tableMap = new Map<string, Map<string, number>>();

  const foodSet = new Set<string>();

  for (const [, tableNumber, foodItem] of orders) {
    foodSet.add(foodItem);

    let foodMap = tableMap.get(tableNumber);
    if (!foodMap) {
      tableMap.set(tableNumber, (foodMap = new Map()));
    }
    foodMap.set(foodItem, (foodMap.get(foodItem) ?? 0) + 1);
  }

  const foods = Array.from(foodSet).sort();
  const n = foods.length;

  const ans: string[][] = [];
  ans.push(["Table"].concat(foods));

  Array.from(tableMap.keys())
    .sort((a, b) => +a - +b)
    .forEach(tableNumber => {
      const item = new Array<string>(n + 1).fill("0");
      item[0] = tableNumber;

      const foodMap = tableMap.get(tableNumber);
      if (foodMap) {
        for (let i = 0; i < n; i++) {
          item[i + 1] = (foodMap.get(foods[i]) ?? 0).toString();
        }
      }

      ans.push(item);
    });

  return ans;
}

export { displayTable };
