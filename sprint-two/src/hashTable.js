

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.hasOwnProperty(index)) { //Different hash
    this._storage[index] = [[k, v]];
  } else if (this.hashExists) {
    let matches = this._storage[index];
    for (var i = 0; i < matches.length; i++) { //Same hash, same key
      if (matches[i][0] === k) {
        matches[i][1] = v;
        return;
      }
    }
    matches.push([k, v]); //Same hash, different key
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var matches = this._storage[index];
  if (!matches) {
    return undefined;
  }
  for (var i = 0; i < matches.length; i++) {
    if (matches[i][0] === k) {
      return matches[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage[index];
  delete this._storage[index];
  return result;
};

HashTable.prototype.hashExists = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var matches = this._storage[index];
  return !!matches.length;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */