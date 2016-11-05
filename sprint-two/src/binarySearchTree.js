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
    return (function search(target) {
      if (this.value === value) {
        return true;
      } else if (this.left !== null && search.call(tree.left, value)) {
        return true;
      } else if (this.right !== null && search.call(tree.right, value)) {
        return true;
      }
      return false;
    })(value);
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

  tree.mapValues = function() {
    var map = [];
    var search = function(depth) {
      if (map[depth] === undefined) {
        map[depth] = [];
      }
      map[depth].push(this.value);
      if (this.left) {
        search.call(this.left, depth + 1);
      }
      if (this.right) {
        search.call(this.right, depth + 1);
      }
    };
    search.call(this, 0);
    return map;
  };

  tree.getSize = function() {
    var size = 1;
    if (this.left) {
      size += this.left.getSize();
    }
    if (this.right) {
      size += this.right.getSize();
    }
    return size;
  };

  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */