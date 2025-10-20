const operationToValue = new Map<string, number>();
operationToValue.set("++X", 1);
operationToValue.set("X++", 1);
operationToValue.set("--X", -1);
operationToValue.set("X--", -1);

function finalValueAfterOperations(operations: string[]): number {
  let ans = 0;
  for (const operation of operations) {
    ans += operationToValue.get(operation)!;
  }
  return ans;
}

export {};
