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

queueMethods.enqueue = function(value) {
  this[this.current] = value;
  this.current++;
};

queueMethods.dequeue = function() {
  var result = this[0];
  for (var i = 0; i < this.current; i++) {
    this[i] = this[i + 1];
  }
  if (this.current > 0) {
    this.current--;
  }
  delete this[this.current];
  return result;
};
