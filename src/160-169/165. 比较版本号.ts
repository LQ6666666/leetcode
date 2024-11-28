function compareVersion(version1: string, version2: string): number {
    const n1 = version1.length;
    const n2 = version2.length;

    let index1 = version1.indexOf(".");
    let index2 = version2.indexOf(".");

    if (index1 === -1) index1 = n1;
    if (index2 === -1) index2 = n2;

    const v1 = +(version1.slice(0, index1) || "0");
    const v2 = +(version2.slice(0, index2) || "0");

    if (v1 > v2) {
        return 1;
    } else if (v1 < v2) {
        return -1;
    } else if (v1 === v2 && index1 === n1 && index2 === n2) {
        return 0;
    } else {
        return compareVersion(version1.slice(index1 + 1), version2.slice(index2 + 1));
    }
};

export { };