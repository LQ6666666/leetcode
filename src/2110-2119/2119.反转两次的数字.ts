function isSameAfterReversals(num: number): boolean {
  if (num > 9 && num % 10 === 0) {
    return false;
  } else {
    return true;
  }
}

export { isSameAfterReversals };
