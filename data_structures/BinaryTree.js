class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    traverse(tree) {
       if (this.left) this.traverse(this.left)
       if (this.right) this.traverse(this.right)
    }

    

    insertChild(value) {
    }
  
    // left, root, right
    inOrderTraversal(func = console.log) {
    }
  
    // root, left, right
    preOrderTraversal(func = console.log) {
    }
  
    // left, right, root
    postOrderTraversal(func = console.log) {
    }
  }
  
  export default BinaryTree;