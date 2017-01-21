var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};


var setPrototype = {};

setPrototype.add = function() {
  var storage = this._storage;

  Array.prototype.forEach.call(arguments, function(item) {
    var key = checkType(item);
    if (!storage.hasOwnProperty(key)) {
      storage[key] = {};
    }
    storage[key][item] = true;
  });
};

setPrototype.contains = function(item) {
  var key = checkType(item);
  var storage = this._storage;
  if (!storage.hasOwnProperty(key)) {
    storage[key] = {};
  }
  return !!this._storage[key][item];
};

setPrototype.remove = function(item) {
  var key = checkType(item);
  var storage = this._storage;
  if (!storage.hasOwnProperty(key)) {
    storage[key] = {};
  }
  delete this._storage[key][item];
};

setPrototype.getSize = function() {
  var storage = this._storage;
  var keys = Object.keys(storage);
  var size = 0;
  keys.forEach(function(key) {
    var keysOfType = Object.keys(storage[key]);
    size += keysOfType.length;
  });
  return size;
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
