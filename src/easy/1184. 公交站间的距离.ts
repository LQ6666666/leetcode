function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
    let n = distance.length, i = start, j = start, a = 0, b = 0;

    while (i !== destination) {
        a += distance[i];

        if (++i == n) {
            i = 0;
        }
    }

    while (j !== destination) {
        if (--j < 0) {
            j = n - 1;
        }

        b += distance[j];
    }

    return Math.min(a, b);
};


export { };