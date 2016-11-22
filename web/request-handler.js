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

  if (req.method === 'GET') {
    if (req.url === '/') { req.url = req.url + 'index.html'; }
    var loc;
    var url = req.url.slice(1);
    var stdCB = (exists) => exists;
    var fileLoc = {
      'index.html': '/index.html',
      'styles.css': '/styles.css',
      'favicon.ico': '/favicon.ico'
    };
    if (fileLoc.hasOwnProperty(url)) {
      loc = path.join(archive.paths.siteAssets, fileLoc[url]);
      fs.readFile(loc, 'utf8', function read(err, data) {
        if (err) { throw err; }
        res.writeHead(200);
        res.end(data);
      });
    } else if (archive.isUrlInList(url, stdCB)) {
      if (archive.isUrlArchived(url, stdCB)) {

      }
    }
  }




  
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
};

// archive.paths.list