var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._current = 0;

};


Queue.prototype.size = function() {
  return this._current;
};

Queue.prototype.enqueue = function(value) {
  this[this._current] = value;
  this._current++;
};

Queue.prototype.dequeue = function() {
  var result = this[0];
  for (var i = 0; i < this._current; i++) {
    this[i] = this[i + 1];
  }
  delete this[this._current - 1];
  if (this._current > 0 ) {
    this._current--;
  }
  return result;
};