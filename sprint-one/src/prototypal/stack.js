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
