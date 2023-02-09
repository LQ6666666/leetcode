class AuthenticationManager {
  private map: Map<string, number>;
  constructor(private timeToLive: number) {
    this.map = new Map();
  }

  generate(tokenId: string, currentTime: number): void {
    this.map.set(tokenId, currentTime + this.timeToLive);
  }

  renew(tokenId: string, currentTime: number): void {
    const expireTime = this.map.get(tokenId) ?? currentTime;
    // 如果给定 tokenId 对应的验证码不存在或已过期，请你忽略该操作，不会有任何更新操作发生。
    if (expireTime > currentTime) {
      this.generate(tokenId, currentTime);
    }
  }

  countUnexpiredTokens(currentTime: number): number {
    let count = 0;
    this.map.forEach(expireTime => {
      if (expireTime > currentTime) {
        count++;
      }
    });
    return count;
  }
}

export { AuthenticationManager };
