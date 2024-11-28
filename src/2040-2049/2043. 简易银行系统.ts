class Bank {
    map: Map<number, number>;
    constructor(balance: number[]) {
        this.map = new Map<number, number>();

        for (let i = 0; i < balance.length; i++) {
            this.map.set(i + 1, balance[i])
        }
    }

    transfer(account1: number, account2: number, money: number): boolean {
        // 判断这两个账户存不存在
        if ([account1, account2].every(account => this.map.has(account)) === false) return false;

        // 判断 account1 的钱要大于 money
        const account1Money = this.map.get(account1)!;
        if (account1Money < money) {
            return false;
        }

        this.map.set(account1, account1Money - money);
        this.map.set(account2, this.map.get(account2)! + money);
        return true;
    }

    deposit(account: number, money: number): boolean {
        if (this.map.has(account) === false) return false;

        this.map.set(account, this.map.get(account)! + money);
        return true;
    }

    withdraw(account: number, money: number): boolean {
        if (this.map.has(account) === false) return false;

        const accountMoney = this.map.get(account)!;

        if (accountMoney < money) {
            return false;
        }

        this.map.set(account, accountMoney - money);
        return true;
    }
}