type F = (x: number) => number;

function compose(functions: F[]): F {
  const n = functions.length;
  if (n === 0) return x => x;
  if (n === 1) return x => functions[0](x);

  return functions.reduce((a, b) => x => a(b(x)));
}

export {};
