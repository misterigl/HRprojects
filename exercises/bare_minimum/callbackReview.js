/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  var result;
  return fs.readFile(filePath, function(err, data) {
    if (data) {
      result = data.toString('utf8');
      result = result.slice(0, result.indexOf('\n'));
    }
    return callback(err, result);
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request(url, function (error, response, body) {
    !error ? callback(error, response.statusCode) : callback(error);
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
