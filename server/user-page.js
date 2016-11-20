var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var database = {
  Fritz: {
    name: 'Fritz',
    age: 36,
    pet: 'Pferd',
    friends: 78

  },
  Martha: {
    name: 'Martha',
    age: 24,
    pet: 'Dog',
    friends: 1155

  }, 
  John: {
    name: 'John',
    age: 29,
    pet: 'Fish',
    friends: 1

  }
};

var generateHTML = function(userObj) {
  response = '<h1>Welcome to ' + userObj.name + "'s page.</h1>" +
    '<br>' +
    '<h3>' + userObj.name + '\'s pet is a ' + userObj.pet + '!</h3>'; 



  return response;
};

app.use(express.static('fakebook'));
app.use(bodyParser.json());

app.route('/users')
  .get(function(req, res) {
    res.send('There\'s nothing here! <a href="http://127.0.0.1:3000">Go Home</a>');
  });

app.route('/user/:userId')
  .get(function(req, res) {
    res.send(generateHTML(database[req.params.userId]));
  });





app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});




