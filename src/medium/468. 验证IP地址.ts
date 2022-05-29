function validIPAddress(queryIP: string): string {
    // 区分是 ip v6 还是 v4
    const isIPV4 = queryIP.includes(".");

    if (isIPV4) {
        return validIPv4(queryIP);
    } else {
        return validIPv6(queryIP);
    }
};

function validIPv4(queryIP: string): "IPv4" | "Neither" {
    const res = queryIP.split(".");
    if (res.length !== 4) return "Neither";
    const re = /^[0-9]*$/;

    for (const item of res) {
        if (item.length === 0) return "Neither";
        if (item.length > 1 && item[0] === "0") return "Neither";

        if (!re.test(item)) return "Neither";

        const x = +item;

        if (!(0 <= x && x <= 255)) {
            return "Neither";
        }
    }

    return "IPv4";
}

function validIPv6(queryIP: string): "IPv6" | "Neither" {
    const res = queryIP.split(":");
    if (res.length !== 8) return "Neither";
    const re = /^[0-9A-Fa-f]*$/;

    for (const item of res) {
        const n = item.length;
        if (n < 1 || n > 4) return "Neither";

        if (!re.test(item)) {
            return "Neither";
        }
    }

    return "IPv6";
}


export { };