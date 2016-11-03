

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
    let keyMatch = this.findKey(k);
    if (keyMatch === -1) {
      matches.push([k, v]); //Same hash, different key
    } else {
      matches[keyMatch][1] = v; //Same hash, same key
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var matches = this._storage[index];
  if (!matches) {
    return undefined;
  }
  var keyMatch = this.findKey(k);
  return keyMatch === -1 ? undefined : matches[keyMatch][1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var matches = this._storage[index];
  var keyMatch = this.findKey(k);
  if (keyMatch !== -1) {
    matches.splice(keyMatch, 1);
  }
};

HashTable.prototype.hashExists = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var matches = this._storage[index];
  return !!matches.length;
};

HashTable.prototype.findKey = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var matches = this._storage[index];
  for (var i = 0; i < matches.length; i++) {
    if (matches[i][0] === k) {
      return i;
    }
  }
  return -1;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */