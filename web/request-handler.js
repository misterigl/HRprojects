var fs = require('fs');
var path = require('path');
var archive = require('../helpers/archive-helpers');
var uri = require('../helpers/uri');
var Promise = require('bluebird');
Promise.promisifyAll(archive);
// require more modules/folders here!
var siteList = '';
var content = '';

exports.handleRequest = function (req, res) {
  var stdCB = (exists) => { return exists; };
  if (req.method === 'GET') {
    if (req.url === '/') { req.url = req.url + 'index.html'; }
    var loc;
    var url = req.url.slice(1);
    var fileLoc = {
      'client.js': '/client.js',
      'loading.html': '/loading.html',
      'index.html': '/index.html',
      'styles.css': '/styles.css',
      'favicon.ico': '/favicon.ico'
    };
    if (fileLoc.hasOwnProperty(url)) {
      console.log('serving static files');
      loc = path.join(archive.paths.siteAssets, fileLoc[url]);
      fs.readFile(loc, 'utf8', function (err, data) {
        if (err) { throw err; }
        res.writeHead(200);
        res.end(data);
      });
    } else {
      archive.isUrlArchived(url, function(exists) {
        if (exists) {
          res.writeHead(200);
          archive.readFile(archive.paths.archivedSites + '/' + url, function(data) {
            res.end(data);
          });
        } else {
          res.writeHead(404);
          res.end();
        }
      }); // else if (archive.isUrlInList(url, stdCB)) {
    } 
    //}
  } else if (req.method === 'POST') {
    var body = '';
    req.on('data', function(chunk) {
      body += chunk;
    }).on('end', function() {
      var url = body.slice(4);
      if (!archive.isUrlInList(url, stdCB)) {
        res.writeHead(302, {location: '/loading.html'});
        archive.addUrlToList(url + '\n', stdCB);
        // res.location('/loading.html');
        res.end();
      }
    });
    
  }
};




  
  // content = '';

  //   } else {
  //     var url = req.url.slice(1);
  //     loc = path.join(__dirname, '/archives/');
  //     fs.readFile(loc + 'sites.txt', function read(err, data) {
  //       if (err) {
  //         throw err;
  //       }
  //       console.log(url);
  //       siteList = data.toString('utf8');
  //       if (siteList.indexOf(url) !== -1) {
  //         fs.readFile(loc + 'sites/' + url, function read(err, data) {
  //           if (err) {
  //             throw err;
  //           }
  //           content = data.toString('utf8');
  //           res.writeHead(200);
  //           res.end(content);
  //           console.log(content);
  //         });
  //       }
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
        


  //     });
  //   }

  //   // if()
  //   // if (req.url !== '/') {
  //   //   req.url = req.url + '';
  //   // }
  // // } else if (/google) {
  // //     var archive = path.join(__dirname, '/archive/sites.txt');
    
  // // }
  // } else if (req.methood === 'POST') {

  // } else {

  // }
// };

// archive.paths.list