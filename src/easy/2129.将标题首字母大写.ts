function capitalizeTitle$(title: string): string {
  const n = title.length;
  let ans: string = "";

  if (n === 0) return ans;

  let i = 0;
  while (i < n) {
    let index = title.indexOf(" ", i);

    if (index === -1) {
      index = n;
    }

    const word = title.slice(i, index);
    if (ans !== "") ans += " ";

    if (word.length < 3) {
      ans += word.toLowerCase();
    } else {
      const first = word.charAt(0).toUpperCase();
      const rest = word.slice(1).toLowerCase();
      ans += first + rest;
    }

    i = index + 1;
  }

  return ans;
}

function capitalizeTitle(title: string): string {
  const words = title.split(" ");
  const n = words.length;
  const result: string[] = new Array<string>();

  for (let i = 0; i < n; i++) {
    let word = words[i];

    if (word.length > 2) {
      word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    } else {
      word = word.toLowerCase();
    }

    result[i] = word;
  }

  return result.join(" ");
}

export {};
