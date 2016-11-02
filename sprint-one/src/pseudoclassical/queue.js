var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.current = 0;

};


Queue.prototype.size = function() {
  return this.current;
};

