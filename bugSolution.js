const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  try {
    response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
  } catch (error) {
    console.error('Error handling request:', error);
    response.writeHead(500);
    response.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

const server = http.createServer(requestListener);

//Use process.on to handle uncaught exceptions
process.on('uncaughtException', function (err) {
  console.error('Unhandled Exception:', err);
  // Perform any necessary cleanup here, such as logging or gracefully shutting down the server
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});