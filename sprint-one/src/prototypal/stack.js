var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack._current = 0;

  return stack;
};

var stackMethods = {};

stackMethods.size = function() {
  return this._current;
};

stackMethods.push = function(value) {
  this[this._current] = value;
  this._current++;
};

stackMethods.pop = function() {
  var result = this[this._current - 1];
  delete this[this._current - 1];
  if (this._current > 0) {
    this._current--;
  }
  return result;
};