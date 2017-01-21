var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack._size = 0;
  for (var method in stackMethods) {
    stack[method] = stackMethods[method];
  }
  return stack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this._size++;
  this[this._size] = value;
  return this._size;
};

stackMethods.pop = function() {
  var result = this[this._size];
  delete this[this._size];

  if (this._size > 0) {
    this._size--;
  }

  return result;
};

stackMethods.size = function() {
  return this._size;
};

