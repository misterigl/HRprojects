describe('graph', function() {
  var graph;

  beforeEach(function() {
    graph = new Graph();
  });

  it('should have methods named "addNode", "contains", "removeNode", "addEdge", "hasEdge", "removeEdge" and "forEachNode"', function() {
    expect(graph.addNode).to.be.a('function');
    expect(graph.contains).to.be.a('function');
    expect(graph.removeNode).to.be.a('function');
    expect(graph.hasEdge).to.be.a('function');
    expect(graph.addEdge).to.be.a('function');
    expect(graph.removeEdge).to.be.a('function');
    expect(graph.forEachNode).to.be.a('function');
  });

  it('should store values as nodes that were inserted', function() {
    graph.addNode(1);
    expect(graph.contains(1)).to.equal(true);
  });

  it('should remove nodes that were inserted', function() {
    graph.addNode(2);
    expect(graph.contains(2)).to.equal(true);
    graph.removeNode(2);
    expect(graph.contains(2)).to.equal(false);
  });

  it('should create edges between two nodes', function() {
    graph.addNode(2);
    graph.addNode(1);
    graph.addNode(3);
    graph.addEdge(3, 2);
    expect(graph.hasEdge(3, 2)).to.equal(true);
    expect(graph.hasEdge(3, 1)).to.equal(false);
  });

  it('should remove edges between nodes', function() {
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(5, 4);
    expect(graph.hasEdge(4, 5)).to.equal(true);
    graph.removeEdge(5, 4);
    expect(graph.hasEdge(4, 5)).to.equal(false);
  });

  it('should remove edges between nodes when a node is removed', function() {
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(5, 4);
    expect(graph.hasEdge(4, 5)).to.equal(true);
    graph.removeNode(5);
    expect(graph.hasEdge(4, 5)).to.equal(false);
  });

  it('should execute a callback on each node in the graph', function() {
    var connectToFive = function(item) {
      graph.addEdge(item, 5);
    };
    graph.addNode(5);
    graph.addNode(2);
    graph.addNode(1);
    graph.addNode(3);
    graph.forEachNode(connectToFive);
    expect(graph.hasEdge(2, 5)).to.equal(true);
    expect(graph.hasEdge(1, 5)).to.equal(true);
    expect(graph.hasEdge(3, 5)).to.equal(true);
    expect(graph.hasEdge(5, 5)).to.equal(true);
  });

  it('should return number of nodes', function() {
    graph.addNode(3);
    graph.addNode(4);
    graph.addNode(5);
    graph.addNode(6);
    expect(graph.nodeCount()).to.equal(4);
    graph.removeNode(3);
    expect(graph.nodeCount()).to.equal(3);
  });

  it('return number of edges', function() {
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addEdge(1, 2);
    graph.addEdge(3, 2);
    graph.addEdge(1, 3);
    expect(graph.edgeCount()).to.equal(3);
    graph.removeEdge(1, 2);
    expect(graph.edgeCount()).to.equal(2);
  });

  it('should not add edges to non-existing nodes', function() {
    graph.addNode(1);
    expect(graph.addEdge.bind(graph, 1, 2)).to.throw(Error);
    expect(graph.addEdge.bind(graph, 0, 10)).to.throw(Error);
    graph.addNode(3);
    expect(graph.addEdge.bind(graph, 1, 3)).to.not.throw(Error);
  });
});