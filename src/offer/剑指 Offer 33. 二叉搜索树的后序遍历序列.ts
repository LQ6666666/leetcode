export { };

function verifyPostorder(postorder: number[]): boolean {
    const n = postorder.length;
    if (n < 2) return true;

    const rootValue = postorder[n - 1];

    // 找到第一个大于 rootValue
    let m = 0;
    while (m < n - 1 && postorder[m] < rootValue) m++;

    // 得到 左右树节点
    const leftPostOrder: number[] = postorder.slice(0, m);

    // 如果 right 不大于 nodeValue 直接 false
    const rightPostOrder: number[] = [];
    for (let i = m; i < n - 1; i++) {
        const nodeValue = postorder[i];
        if (nodeValue < rootValue) return false;
        rightPostOrder.push(nodeValue);
    }

    const leftValue = leftPostOrder[leftPostOrder.length - 1] ?? Number.MIN_SAFE_INTEGER;
    const rightValue = rightPostOrder[rightPostOrder.length - 1] ?? Number.MAX_SAFE_INTEGER;

    return leftValue < rootValue && rootValue < rightValue
        && verifyPostorder(leftPostOrder)
        && verifyPostorder(rightPostOrder);
};