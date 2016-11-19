/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};
var time = '2009-06-15T13:45:30Z'; //new Date().getTime();
console.log(time);
var messages = []; 
/*[{
  createdAt: time,
  objectId: '1',
  roomname: 'lobby',
  updatedAt: 'yesterday',
  username: 'Jono',
  text: 'Do my bidding!'
}, {
  username: 'Jarob',
  text: 'No!',
  createdAt: time,
  objectId: '2',
  roomname: 'lobby',
  updatedAt: 'yesterday'
}, {
  username: 'Michael',
  text: "Y'all crazy!",
  createdAt: time,
  objectId: '3',
  roomname: 'lobby',
  updatedAt: 'yesterday'
}]; */

var requestHandler = function(request, response) {
  
  console.log('Serving request type ' + request.method + ' for url ' + request.url);
  var headers = defaultCorsHeaders;

  headers['Content-Type'] = 'application/json';

  if (request.method === 'GET') {
    if (request.url === '/classes/messages') {
      response.writeHead(200, headers);
      response.end(JSON.stringify({results: messages}));
    } else {
      response.writeHead(404, headers);
      response.end('sorry, try somewhere else');
    }
  } else if (request.method === 'POST') {
    if (request.url === '/classes/messages') {

      var requestBody = '';
      response.writeHead(201, headers);
      request.on('data', function(data) {
        requestBody += data;
      });
      request.on('end', function() {
        console.log(requestBody);
        var message = JSON.parse(requestBody);

        message.createdAt = '2009-06-15T13:45:30Z'; //new Date().toString();
        message.objectId = ~~(Math.random() * 100000000);
        message.roomname = response.roomname || 'lobby';
        // message.username = response.username;
        message.updatedAt = message.createdAt;

        messages.push(message);
      });

      // console.log("We are at the end. Data is:", response.on);
      response.end(JSON.stringify({results: messages}));
    } 

  } else if (request.method === 'OPTIONS') {
    response.writeHead(200, headers);
    response.end();
  } else {
    response.writeHead(405, 'Operation not available', headers);
    return response.end('empty');
  }

};



module.exports.requestHandler = requestHandler;

