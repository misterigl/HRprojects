

var HashTable = function() {
  this._limit = 8;
  this._minLimit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  this._size++;
  if (this._size + 1 === this._limit) {
    this._limit *= 2;
  }

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
  this._size--;
  if (this._size <= (this._limit / 2) && (this._limit / 2) >= this._minLimit) {
    this._limit /= 2;
  }

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
  if (matches === undefined) {
    return -1;
  }
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