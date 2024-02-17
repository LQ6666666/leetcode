class Node {
  constructor(public name: string, public isAlive: boolean = true, public children: Node[] = []) {}
}

class ThroneInheritance {
  private root: Node;
  private nameToNodeMap: Map<string, Node>;

  constructor(kingName: string) {
    this.nameToNodeMap = new Map();
    this.root = new Node(kingName);
    this.nameToNodeMap.set(kingName, this.root);
  }

  birth(parentName: string, childName: string): void {
    const child = new Node(childName);
    this.nameToNodeMap.set(childName, child);

    const parent = this.nameToNodeMap.get(parentName);
    if (parent) {
      parent.children.push(child);
    }
  }

  death(name: string): void {
    const node = this.nameToNodeMap.get(name);
    if (node) {
      node.isAlive = false;
    }
  }

  getInheritanceOrder(): string[] {
    const result: string[] = [];

    const helper = (node: Node) => {
      if (node.isAlive) {
        result.push(node.name);
      }
      const children = this.nameToNodeMap.get(node.name)?.children ?? [];
      for (const child of children) {
        helper(child);
      }
    };

    helper(this.root);
    return result;
  }
}

export { ThroneInheritance };
