var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.current = 0;
  return queue;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.current;
};
