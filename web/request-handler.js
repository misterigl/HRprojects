var fs = require('fs');
var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var content = '';

exports.handleRequest = function (req, res) {
  if (req.method === 'GET') {
    var loc = path.join(__dirname, '/public/Index.html');
    fs.readFile(loc, function read(err, data) {
      if (err) {
        throw err;
      }
      content = data;
      res.writeHead(200);
      res.end(content);
    });
  } else if (req.methood === 'POST') {

  } else {

  }
};

// archive.paths.list