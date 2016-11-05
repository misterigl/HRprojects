var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};


var setPrototype = {};

setPrototype.add = function() {
  var storage = this._storage;

  Array.prototype.forEach.call(arguments, function(item) {
    storage[item] = true;
  });
};

setPrototype.contains = function(item) {
  return !!this._storage[item];
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

setPrototype.getSize = function() {
  return Object.keys(this._storage).length;
};

var checkType = function(value) {
  if (Array.isArray(value)) {
    return 'array';
  }
  if (value === null) {
    return 'null';
  }
  if (typeof value === 'object') {
    return value.constructor.toString();
  }
  return typeof value;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
