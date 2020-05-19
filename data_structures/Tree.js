class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  insertChild(value) {
    const newTree = new Tree(value);
    this.children.push(newTree);
    return newTree;
  }

  // Uses a Depth-First Traversal
  static traverse(tree, func = console.log) {}

  contains(searchValue) {}

  static size(tree) {}

  static find(tree, value) {}

  insert(parentTree, value) {}

  remove(value) {}

  reorder(node1, node2) {}
}

//   export default Tree;

const myTree = new Tree(1);
const myTree2 = myTree.insertChild(2);
myTree2.insertChild(3)
console.log(myTree);
