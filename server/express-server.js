var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('client'));
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