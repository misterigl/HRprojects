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

var requestHandler = function(request, response) {
  
  console.log('Serving request type ' + request.method + ' for url ' + request.url);
  var headers = defaultCorsHeaders;

  headers['Content-Type'] = 'application/json';

  if (request.method === 'GET') {
    if (request.url === '/classes/messages') {
      response.writeHead(200, headers);
      response.end(JSON.stringify({results: []}));
    }
  } else if (request.method === 'POST') {
    if (request.url === '/classes/messages') {
      var requestBody = '';
      response.writeHead(201, headers);
      response.on('data', function(data) {
        requestBody += data;
      });
      response.on('end', function() {
        console.log(requestBody);
      });
      console.log('data received', requestBody);
      response.end();
    } 

  } else {
    response.writeHead(405, 'Method Not Supported', headers);
    return response.end('empty');
  }

};



module.exports = requestHandler;

