function accountBalanceAfterPurchase(purchaseAmount: number): number {
  const r = purchaseAmount % 10;
  if (r < 5) {
    purchaseAmount -= r;
  } else {
    purchaseAmount += 10 - r;
  }
  return 100 - purchaseAmount;
}

export { accountBalanceAfterPurchase };
