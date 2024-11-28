function countSeniors$(details: string[]): number {
  return details.reduce((acc, detail) => (acc += +detail.slice(11, 13) > 60 ? 1 : 0), 0);
}

function countSeniors(details: string[]): number {
  let ans = 0;
  for (const detail of details) {
    const num = +detail[11];
    if (num > 6 || (num === 6 && detail[12] !== "0")) {
      ans++;
    }
  }

  return ans;
}

export {};
