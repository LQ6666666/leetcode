function invalidTransactions(transactions: string[]): string[] {
  const n = transactions.length;
  // 存放要删除的交易的索引
  const deleteSet = new Set<number>();
  // 同名可能有多条记录
  const dataMap = new Map<string, Transaction[]>();

  for (let i = 0; i < n; i++) {
    const transaction = new Transaction(i, transactions[i]);
    if (transaction.amount > 1000) {
      deleteSet.add(transaction.index);
    }

    let list = dataMap.get(transaction.name);
    // 它和另一个城市中同名的另一笔交易相隔不超过(包含) 60 分钟
    if (list) {
      for (const item of list) {
        if (item.city !== transaction.city && Math.abs(item.time - transaction.time) <= 60) {
          deleteSet.add(transaction.index);
          deleteSet.add(item.index);
        }
      }
    } else {
      list = [];
    }

    list.push(transaction);
    dataMap.set(transaction.name, list);
  }

  const ans: string[] = [];
  deleteSet.forEach(index => {
    ans.push(transactions[index]);
  });

  return ans;
}

class Transaction {
  public name: string;
  public time: number;
  public amount: number;
  public city: string;

  constructor(public index: number, str: string) {
    const [name, time, amount, city] = str.split(",");
    this.name = name;
    this.time = +time;
    this.amount = +amount;
    this.city = city;
  }
}

export {};
