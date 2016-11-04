var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  for (var method in treeMethods) {
    newTree[method] = treeMethods[method];
  }

  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  return this.children.reduce(function(foundTarget, tree) {
    if (tree.contains(target)) {
      return true;
    }
    return foundTarget;
  }, false);
};

treeMethods.getSize = function() {
  var count = 1;
  for (var i = 0; i < this.children.length; i++) {
    count += this.children[i].getSize();
  }
  return count;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */ 
