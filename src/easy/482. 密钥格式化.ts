function licenseKeyFormatting(s: string, k: number): string {
    let str: string = s.replace(/-/g, "");
    const arr: string[] = [];

    while (str.length !== 0) {
        arr.unshift(str.substring(str.length - k).toLocaleUpperCase())

        str = str.substring(0, str.length - k)
    }

    return arr.join("-");
};


console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
