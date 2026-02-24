import { TreeNode } from "@/utils";

function recoverFromPreorder(traversal: string): TreeNode | null {
  const n = traversal.length;
  // 维护一个栈
  const stack = [];
  for (let i = 0; i < n; ) {
    // 当前构建的节点所属的level
    let curLevel = 0;
    while (i < n && traversal[i] == "-") {
      // 数数有几个连字符
      // 统计它的level
      // 扫描的指针 +1
      curLevel++;
      i++;
    }

    // 获取节点值字符串
    let str = "";
    while (i < n && traversal[i] != "-") {
      str += traversal[i];
      // 扫描的指针+1
      i++;
    }

    // 创建节点
    const curNode = new TreeNode(+str);

    if (stack.length == 0) {
      // 此时栈为空，curNode为根节点
      // 入栈，成为栈底
      stack.push(curNode);
      // 它没有父亲，不用找父亲，continue
      continue;
    }

    while (stack.length > curLevel) {
      // 只要栈高 > 当前节点的level，就栈顶出栈
      stack.pop();
    }

    const parent = stack[stack.length - 1]!;

    if (parent.left === null) {
      // 栈顶是父亲了，左儿子不存在
      parent.left = curNode;
    } else {
      // 左儿子已经存在，curNode成为右儿子
      parent.right = curNode;
    }

    // curNode自己也是父亲，入栈，等儿子
    stack.push(curNode);
  }

  // 栈底节点肯定是根节点
  return stack[0];
}

export {};
