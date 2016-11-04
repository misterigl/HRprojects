var DoublyLinkedList = function() {
  var list = LinkedList(arguments);

  list.addToHead = function(value) {
    var remaining = Array.prototype.slice.call(arguments, 1);
    var node = Node(value);
    node.next = list.head;
    if (list.head !== null) {
      list.head.prev = node;  
    }
    list.head = node;
    if (list.tail === null) {
      list.tail = node;
    }
    if (remaining.length) {
      list.addToHead.apply(null, remaining);
    }
  };

  list.removeTail = function() {
    var result = list.tail.value;
    if (list.tail.prev !== null) {
      list.tail = list.tail.prev;
      list.tail.next = null;
    } else {
      list.head = null;
      list.tail = null;
    }

    return result;
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