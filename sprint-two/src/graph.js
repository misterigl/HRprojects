

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.indexOf(node) !== -1;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var nodeIndex = this.nodes.indexOf(node);
  this.nodes.splice(nodeIndex, 1);
  var edges = this.edges;
  edges.forEach(function(edge, index) {
    if (edge.indexOf(node) !== -1) {
      edges.splice(index, 1);
    }
  });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edges.reduce(function(hasEdge, edge) {
    if (edge[0] === fromNode && edge[1] === toNode) {
      return true;
    }
    if (edge[1] === fromNode && edge[0] === toNode) {
      return true;
    }
    return false;
  }, false);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var edge = [fromNode, toNode];
  this.edges.push(edge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var edges = this.edges;
  edges.forEach(function(edge, index) {
    if (edge[0] === fromNode && edge[1] === toNode) {
      edges.splice(index, 1);
    }
    if (edge[1] === fromNode && edge[0] === toNode) {
      edges.splice(index, 1);
    }
  });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


