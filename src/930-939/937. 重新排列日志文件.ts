function reorderLogFiles(logs: string[]): string[] {
    const numberLog: string[] = [];
    const letterLog: string[][] = [];

    for (const log of logs) {
        const [mark, isNumberLog, content] = parseLog(log);

        if (isNumberLog) {
            numberLog.push(log);
        } else {
            letterLog.push([mark, log, content!, log]);
        }
    }

    // 对字母日志进行排序
    letterLog.sort((a, b) => {
        // 内容一样
        if (a[2] === b[2]) {
            return a[0].localeCompare(b[0]);
        }

        return a[2].localeCompare(b[2]);
    });

    return letterLog.map(([, , , log]) => log).concat(numberLog);

    function parseLog(log: string): [string, boolean, string?] {
        const index = log.indexOf(" ");
        const mark = log.slice(0, index);
        const re = /[0-9]/;

        const isNumberLog = re.test(log[index + 1]);

        if (isNumberLog) {
            return [mark, isNumberLog];
        } else {
            const content = log.slice(index + 1);
            return [mark, isNumberLog, content];
        }
    }
};


export { };