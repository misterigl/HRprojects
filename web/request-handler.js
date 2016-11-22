var fs = require('fs');
var path = require('path');
var archive = require('../helpers/archive-helpers');
var uri = require('../helpers/uri');
// require more modules/folders here!
var siteList = '';
var content = '';

exports.handleRequest = function (req, res) {
  // content = '';

  if (req.method === 'GET') {
    var loc;
    var indexLoc = {
      '/': '/public/index.html',
      '/styles.css': '/public/styles.css',
      'favicon.ico': '/public/favicon.ico'
    };
    if (indexLoc.hasOwnProperty(req.url)) {
      loc = path.join(__dirname, indexLoc[req.url]);
      fs.readFile(loc, function read(err, data) {
        if (err) {
          throw err;
        }
        content = data.toString('utf8');
        res.writeHead(200);
        res.end(content);
      });
    } else {
      var url = req.url.slice(1);
      loc = path.join(__dirname, '/archives/');
      fs.readFile(loc + 'sites.txt', function read(err, data) {
        if (err) {
          throw err;
        }
        console.log(url);
        siteList = data.toString('utf8');
        if (siteList.indexOf(url) !== -1) {
          fs.readFile(loc + 'sites/' + url, function read(err, data) {
            if (err) {
              throw err;
            }
            content = data.toString('utf8');
            res.writeHead(200);
            res.end(content);
            console.log(content);
          });
        }
        // var obj = JSON.parse(siteList);
        // var isThere = obj[url];
        // if (!!isThere) {
        //   loc += 'sites/' + url; 
        //   fs.readFile(loc, function read(err, data) {
        //     if (err) {
        //       throw err;
        //     }
        //     content = data.toString('utf8');
        //     res.writeHead(200);
        //     res.end(content);
        //   });
        // }
        


      });
    }

    // if()
    // if (req.url !== '/') {
    //   req.url = req.url + '';
    // }
  // } else if (/google) {
  //     var archive = path.join(__dirname, '/archive/sites.txt');
    
  // }
  } else if (req.methood === 'POST') {

  } else {

  }
};

// archive.paths.list