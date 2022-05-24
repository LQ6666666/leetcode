import { ListNode } from "../utils";

function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
    // 1. 计算长度
    let length = 0;
    let cur = head;

    while (cur) {
        length++;
        cur = cur.next;
    }

    // 2. 平均长度和余数
    const aveLength = Math.floor(length / k);
    let remainder = length % k;

    cur = head;
    const ans: (ListNode | null)[] = [];
    // 3. 分配长度
    for (let i = 0; i < k; i++) {
        let n = aveLength;
        if (remainder > 0) {
            n++;
            remainder--;
        }

        if (n === 0) {
            ans.push(null);
            continue;
        }

        let i = 0;
        const partHead = cur;
        let prev = null
        while (i < n) {
            prev = cur;
            cur = cur!.next;
            i++;
        }
        prev!.next = null;
        ans.push(partHead);
    }

    return ans;
};

export { };