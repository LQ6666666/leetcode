function largestWordCount(messages: string[], senders: string[]): string {
  const n = messages.length;
  const map = new Map<string, number>();

  for (let i = 0; i < n; i++) {
    const words = messages[i].split(" ");
    const sender = senders[i];
    map.set(sender, (map.get(sender) ?? 0) + words.length);
  }

  let maxValue = Number.MIN_SAFE_INTEGER;
  map.forEach(set => {
    maxValue = Math.max(set, maxValue);
  });

  const result: string[] = [];
  map.forEach((value, sender) => {
    if (value === maxValue) {
      result.push(sender);
    }
  });

  result.sort(localeCompare);
  return result[0];
}

function localeCompare(b: string, a: string): number {
  let i = 0;
  while (i < a.length && i < b.length) {
    const aCode = a.charCodeAt(i);
    const bCode = b.charCodeAt(i);

    if (aCode > bCode) {
      return 1;
    } else if (bCode > aCode) {
      return -1;
    } else {
      i++;
    }
  }

  if (a.length === b.length) {
    return 0;
  } else {
    return a.length > b.length ? 1 : -1;
  }
}

export { largestWordCount };
