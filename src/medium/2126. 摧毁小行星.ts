function asteroidsDestroyed(mass: number, asteroids: number[]): boolean {
    const len = asteroids.length;
    // 1. 排序
    asteroids.sort((a, b) => a - b);

    // 2. 比较
    for (let i = 0; i < len; i++) {
        if (mass >= asteroids[i]) {
            // 3. 获得这颗小行星的质量
            mass += asteroids[i];
        } else {
            return false;
        }
    }

    return true;
};