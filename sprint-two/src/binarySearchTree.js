var BinarySearchTree = function(value) {
  var tree = {};
  tree.left = null;
  tree.right = null;
  tree.value = value;

  tree.insert = function(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else if (value === this.value) {
      throw new Error('Value already in tree');
    } else {
      if (this.right === null) {
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  };

  tree.contains = function(value) {
    if (this.value === value) {
      return true;
    } else if (this.left !== null && this.right !== null) {
      return this.left.contains(value) || this.right.contains(value);
    } else if (this.left !== null) {
      return this.left.contains(value);
    } else if (this.right !== null) {
      return this.right.contains(value);
    } else {
      return false;
    }
  };

  tree.depthFirstLog = function(cb) {
    cb(this.value);
    if (this.left !== null) {
      this.left.depthFirstLog(cb);
    }
    if (this.right !== null) {
      this.right.depthFirstLog(cb);
    }
  };

  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */