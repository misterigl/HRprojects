var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var Promise = require('bluebird');
Promise.promisifyAll(fs);
var http = require('http');
/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../web/archives/sites'),
  list: path.join(__dirname, '../web/archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  // console.log(filePath);
  return fs.readFileAsync(exports.paths.list, 'utf8').then(function(file) {
    callback(file.split('\n'));
  });

};

exports.isUrlInList = function(url, callback) {
  exports.readListOfUrls(function(urlArray) {
    return callback(_.contains(urlArray, url));
  });

};

exports.addUrlToList = function(url, callback) {
  if (!exports.isUrlInList(url, () => {} )) {
    fs.appendFile(exports.paths.list, url, callback);
  }
};

exports.isUrlArchived = function(url, callback) {
  fs.open(exports.paths.archivedSites + '/' + url, 'r', (err, file) => {
    return err ? callback(false) : callback(true);
  });
};

exports.downloadUrls = function(urlArray) {
  _.forEach(urlArray, (url) => {
    console.log('downloading ', url);
    http.get({
      host: url
      // path: '/user'
    }, function(response) {
      var body = '';
      response.on('data', function(d) {
        body += d;
      });
      response.on('end', function() {
        console.log('writting ', url);        
        fs.writeFile(exports.paths.archivedSites + '/' + url, body); 
      });
    });
  });
};

exports.readFile = function(loc, callback) {
  fs.readFile(loc, function read(err, data) {
    if (err) { throw err; }
    return callback(data.toString('utf8'));
  });
};
