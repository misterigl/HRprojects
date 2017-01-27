// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.
var _ = require('underscore');
var archive = require('../helpers/archive-helpers');
var Promise = require('bluebird');
Promise.promisifyAll(archive);
console.log('starting downloads');


archive.readListOfUrls((urlArray) => { 
  urlArray.pop();
  archive.downloadUrls(urlArray); 
});