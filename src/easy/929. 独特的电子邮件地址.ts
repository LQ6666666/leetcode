function numUniqueEmails(emails: string[]): number {
    const set = new Set<string>();
    for (const email of emails) {
        const [local, org] = email.split("@");
        set.add(normalizeLocal(local) + org);
    }
    return set.size;
};

function normalizeLocal(local: string): string {
    let ret = "";
    for (const ch of local) {
        if (ch === ".") continue;
        if (ch === "+") break;

        ret += ch;
    }
    return ret;
}

export { };