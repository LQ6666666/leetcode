function solution(read4: (buf4: string[]) => number) {

    return function (buf: string[], n: number): number {
        let idx = 0;
        const buf4: string[] = new Array(4);
        let size = read4(buf4);

        while (size > 0 && idx < n) {
            for (let i = 0; i < size && idx < n; ++i) {
                buf[idx++] = buf4[i]
            };

            size = read4(buf4);
        }
    
        return idx;
    };
};