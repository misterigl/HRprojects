var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var _storage = {};
  var _size = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    _size++;
    _storage[_size] = value;
    return _size;
  };

  someInstance.pop = function() {
    var result = _storage[_size];
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
