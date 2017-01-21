var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._current = 0;
};

Stack.prototype.size = function() {
  return this._current;
};

Stack.prototype.push = function(value) {
  this[this._current] = value;
  this._current++;
};

Stack.prototype.pop = function() {
  var result = this[this._current - 1];
  delete this[this._current - 1];
  if (this._current > 0) {
    this._current--;
  }
  return result;
};

