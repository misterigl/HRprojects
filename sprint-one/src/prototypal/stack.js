var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.current = 0;

  return stack;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.current;
};

stackMethods.push = function(value) {
  this[this.current] = value;
  this.current++;
};

stackMethods.pop = function() {
  var result = this[this.current - 1];
  delete this[this.current - 1];
  if (this.current > 0) {
    this.current--;
  }
  return result;
};