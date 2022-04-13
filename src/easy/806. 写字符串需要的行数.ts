function numberOfLines(widths: number[], s: string): number[] {
    const MAX_WIDTH = 100;
    let width = 0, row = 1;

    for (const ch of s) {
        const need = widths[ch.charCodeAt(0) - 97];
        width += need;

        if (width >= MAX_WIDTH) {
            row++;
            width = need;
        }
    }

    return [row, width];
};