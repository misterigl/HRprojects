describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  it('should be able to refer to previous nodes by reference on current node', function() {
    doublyLinkedList.addToTail(0);
    var node = doublyLinkedList.tail;
    doublyLinkedList.addToTail(2);
    expect(doublyLinkedList.tail.prev).to.eql(node);
  });

  it('should remove reference to previous head on removeHead', function() {
    doublyLinkedList.addToTail(6);
    doublyLinkedList.addToTail(2);
    doublyLinkedList.addToTail(10);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.prev).to.eql(null);
  });

  it('should add node to head of list', function() {
    doublyLinkedList.addToTail(1);
    var oldHead = doublyLinkedList.head;
    doublyLinkedList.addToHead(0);
    expect(doublyLinkedList.head.value).to.equal(0);
    expect(oldHead.prev).to.equal(doublyLinkedList.head);
    expect(doublyLinkedList.head.next).to.equal(oldHead);
  });

  it('should set tail when adding first node to head', function() {
    doublyLinkedList.addToHead(1);
    expect(doublyLinkedList.head).to.be.not.null;
    expect(doublyLinkedList.tail).to.be.not.null;
    expect(doublyLinkedList.head).to.eql(doublyLinkedList.tail);
  });

  it('should remove node from head if last node removed from tail', function() {
    doublyLinkedList.addToHead(1);
    doublyLinkedList.addToTail(2);
    doublyLinkedList.removeTail();
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.head).to.be.null;
    expect(doublyLinkedList.tail).to.be.null;
  });

  it('should remove the tail from the list and return its value', function() {
    doublyLinkedList.addToHead(1);
    doublyLinkedList.addToHead(2);
    doublyLinkedList.addToHead(3);
    var node = doublyLinkedList.tail;
    doublyLinkedList.removeTail();
    expect(node.value).to.equal(1);
    expect(node).to.not.eql(doublyLinkedList.tail);
    expect(doublyLinkedList.tail.next).to.be.null; 
  });

  // add more tests here to test the functionality of linkedList
});
