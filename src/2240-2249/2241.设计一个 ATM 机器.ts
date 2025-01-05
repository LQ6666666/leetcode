const DENOMINATIONS = [20, 50, 100, 200, 500];
const KINDS = DENOMINATIONS.length;

class ATM {
  private banknotes: number[];

  constructor() {
    this.banknotes = new Array<number>(KINDS).fill(0);
  }

  deposit(banknotesCount: number[]): void {
    for (let i = 0; i < KINDS; i++) {
      this.banknotes[i] += banknotesCount[i];
    }
  }

  withdraw(amount: number): number[] {
    const ans = new Array<number>(KINDS).fill(0);

    for (let i = KINDS - 1; i >= 0; i--) {
      ans[i] = Math.min(Math.floor(amount / DENOMINATIONS[i]), this.banknotes[i]);
      amount -= ans[i] * DENOMINATIONS[i];
    }

    if (amount > 0) {
      return [-1];
    }

    for (let i = 0; i < KINDS; i++) {
      this.banknotes[i] -= ans[i];
    }

    return ans;
  }
}

export { ATM };
