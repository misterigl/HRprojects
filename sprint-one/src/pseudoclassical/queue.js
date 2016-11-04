var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.current = 0;

};


Queue.prototype.size = function() {
  return this.current;
};

Queue.prototype.enqueue = function(value) {
  this[this.current] = value;
  this.current++;
};

Queue.prototype.dequeue = function() {
  var result = this[0];
  for (var i = 0; i < this.current; i++) {
    this[i] = this[i + 1];
  }
  delete this[this.current - 1];
  if (this.current > 0 ) {
    this.current--;
  }
  return result;
};