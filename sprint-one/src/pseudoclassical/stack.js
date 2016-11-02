var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.current = 0;
};

Stack.prototype.size = function() {
  return this.current;
};

Stack.prototype.push = function(value) {
  this[this.current] = value;
  this.current++;
};

Stack.prototype.pop = function() {
  var result = this[this.current - 1];
  delete this[this.current - 1];
  if (this.current > 0) {
    this.current--;
  }
  return result;
};

