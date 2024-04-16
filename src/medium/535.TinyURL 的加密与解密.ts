const shortUrlMap = new Map<string, string>();

function encode(longUrl: string): string {
  while (true) {
    const str = (Math.random() * 62).toString(16).replace(".", "");
    const shortUrl = "http://tinyurl.com/" + str;
    if (!shortUrlMap.has(shortUrl)) {
      shortUrlMap.set(shortUrl, longUrl);
      return shortUrl;
    }
  }
}

function decode(shortUrl: string): string {
  return shortUrlMap.get(shortUrl)!;
}

export {};
