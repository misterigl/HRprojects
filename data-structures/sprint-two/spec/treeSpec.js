describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should return size of tree', function() {
    tree.addChild(1);
    tree.addChild(2);
    tree.addChild(3);
    tree.addChild(4);
    expect(tree.getSize()).to.equal(5);
  });

  it('should remove tree from its parent in both directions', function() {
    tree.addChild(1);
    var parent = tree.children[0];
    parent.addChild(2);
    var target = parent.children[0];
    target.addChild(3);
    target.removeFromParent();
    expect(parent.children.length).to.equal(0);
    expect(target.parent).to.be.null;
  });

  it('should execute the callback on every node in the tree', function() {
    tree.addChild(1);
    tree.addChild(2);
    tree.addChild(3);
    tree.children[0].addChild(4);
    tree.children[1].addChild(5);
    tree.children[2].addChild(6);
    tree.children[0].children[0].addChild(7);
    var total = 0;
    var sum = function() {
      if (this.value !== null) {
        total += this.value;
      }
    };
    tree.traverse(sum);
    expect(total).to.equal(28);
  });
});
