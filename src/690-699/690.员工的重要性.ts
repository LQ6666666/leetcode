class Employee {
  id: number;
  importance: number;
  subordinates: number[];
  constructor(id: number, importance: number, subordinates: number[]) {
    this.id = id === undefined ? 0 : id;
    this.importance = importance === undefined ? 0 : importance;
    this.subordinates = subordinates === undefined ? [] : subordinates;
  }
}

function getImportance(employees: Employee[], id: number): number {
  const map = new Map<number, Employee>();

  for (const e of employees) {
    map.set(e.id, e);
  }

  return dfs(id);

  function dfs(id: number): number {
    const employee = map.get(id);
    if (!employee) return 0;

    let sum = employee.importance;
    for (const subId of employee.subordinates) {
      sum += dfs(subId);
    }

    return sum;
  }
}

export { getImportance };
