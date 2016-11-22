/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var Promise = require('bluebird');
Promise.promisifyAll(fs);
var request = Promise.promisify(require('request'));
Promise.promisifyAll(request);
// Now you can use fs as if it was designed to use bluebird promises from the beginning


// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // var promise = Promise(fs.readFile)
  return fs.readFileAsync(filePath, 'utf8').then(function(file) {
    return file.slice(0, file.indexOf('\n'));
  });

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  return request(url).then(function (response) {
    return response.statusCode;
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};

// request(url, function (error, response, body) {
//     !error ? callback(error, response.statusCode) : callback(error);
//   });