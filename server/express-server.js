const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  app.use(express.static('../client'));
  app.use(bodyParser.json());

  var messages = [];

  app.get('/classes/messages', function (req, res) {
    res.send({results: messages});

  });


  app.post('/classes/messages', function(req, res) {
    res.send('Retrieved PUT message!');
    var message = req.body;
    message.createdAt = message.objectId = new Date().getTime();
    // message.objectId = new Date().getTime();
    message.roomname = message.roomname || 'lobby';
    message.updatedAt = message.createdAt;

    messages.unshift(message);



  });

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
}



