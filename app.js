const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Lalitha');

  res.end('Hello, Lalitha has been logged.');
});

server.listen(4000, () => {
  console.log('Server running at http://localhost:4000/');
});