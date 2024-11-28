import { ListNode } from "../utils";

function mergeKLists$(lists: Array<ListNode | null>): ListNode | null {
  let array: number[] = [];

  for (const list of lists) {
    if (list === null) {
      continue;
    }

    array = array.concat(listNodeToArray(list));
  }

  array.sort((a, b) => a - b);

  return arrayToListNode(array);
}

const arrayToListNode = (array: number[]) => {
  const root: ListNode = new ListNode();
  let current: ListNode = root;

  let i = 0;

  while (i !== array.length) {
    const node = new ListNode();
    node.val = array[i];
    current.next = node;
    current = node;
    i++;
  }

  return root.next;
};

const listNodeToArray = (root: ListNode) => {
  if (root === null) return [];

  const arr: number[] = [];
  let current: ListNode = root;

  while (true) {
    arr.push(current.val);

    if (current.next === null) {
      return arr;
    }

    current = current.next;
  }
};

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let ans: ListNode | null = null;
  for (const list of lists) {
    ans = mergeTwoLists(ans, list);
  }
  return ans;
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummyHead = new ListNode(-1);
  let current: ListNode | null = dummyHead;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }

    current = current.next;
  }

  if (l1) {
    current.next = l1;
  }

  if (l2) {
    current.next = l2;
  }

  return dummyHead.next;
}

export { mergeKLists };
