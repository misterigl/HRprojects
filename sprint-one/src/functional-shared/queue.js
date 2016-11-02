var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.current = 0;
  queue.prototype = queueMethods;
  
  for (var method in queueMethods) {
    queue[method] = queueMethods[method];
  }
  
  return queue;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.current;
};
