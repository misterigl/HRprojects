var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var _storage = {};
  var _size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    _size++;
    _storage[_size] = value;
  };

  someInstance.dequeue = function() {
    var result = _storage[1];
    delete _storage[1];

    for (var key in _storage) {
      _storage[key - 1] = _storage[key];
    }

    delete _storage[_size];

    if (_size > 0) {
      _size--;
    }
    return result;
  };

  someInstance.size = function() {
    return _size;
  };

  return someInstance;
};
