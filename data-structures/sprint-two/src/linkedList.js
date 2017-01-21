var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);

    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
    }

    this.tail = node;

    if (this.head === null) {
      this.head = node;
    }
  };

  list.removeHead = function() {
    var result = list.head.value;
    list.head = list.head.next;
    if (list.head) {
      list.head.prev = null;
    }
    return result;
  };

  list.contains = function(target) {
    var node = list.head;
    while (true) {
      if (node.value === target) {
        return true;
      }
      if (node.next === null) {
        return false;
      }
      node = node.next;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */