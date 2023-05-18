function countSeniors(details: string[]): number {
  return details.reduce((acc, detail) => (acc += +detail.slice(11, 13) > 60 ? 1 : 0), 0);
}

export {};
