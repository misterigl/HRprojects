var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue._size = 0;

  for (var method in queueMethods) {
    queue[method] = queueMethods[method];
  }

  return queue;
};

var queueMethods = {};


queueMethods.enqueue = function(value) {
  this[this._size] = value;
  this._size++;
};

queueMethods.dequeue = function() {
  var result = this[1];
  delete this[1];

  for (var key in this) {
    this[key - 1] = this[key];
  }
  delete this[this._size];
  if (this._size > 0) {
    this._size--;
  }

  return result;
};

queueMethods.size = function() {
  return this._size;
};