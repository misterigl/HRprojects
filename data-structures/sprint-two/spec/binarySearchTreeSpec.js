describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3]);
  });

  it('should return the size of the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(4);
    binarySearchTree.insert(10);
    expect(binarySearchTree.getSize()).to.equal(5);
  });

  it('should map the values of children at each generation', function() {
    binarySearchTree.insert(3);
    binarySearchTree.insert(4);
    binarySearchTree.insert(10);
    binarySearchTree.insert(54);
    binarySearchTree.insert(12312);
    binarySearchTree.insert(6485);
    binarySearchTree.insert(78352);
    var map = binarySearchTree.mapValues();
    expect(map[0][0]).to.equal(5);
    expect(map[2][1]).to.equal(54);
    expect(map[4][0]).to.equal(6485);
  });

  it('should log the values in breadth first order', function() {
    var capturedLogs = [];
    console.log = function(value) {
      capturedLogs.push(value);
    };
    binarySearchTree.insert(3);
    binarySearchTree.insert(4);
    binarySearchTree.insert(10);
    binarySearchTree.insert(54);
    binarySearchTree.insert(12312);
    binarySearchTree.insert(6485);
    binarySearchTree.insert(78352);
    binarySearchTree.breadthFirstLog();
    expect(capturedLogs).to.eql([5, 3, 10, 4, 54, 12312, 6485, 78352]);
  });

});
