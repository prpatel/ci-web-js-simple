var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Continuous Integration for Web and JS Projects Sample');
}).listen(3000, '127.0.0.1');
// broken build
console.log('Server running at http://127.0.0.1:3000/');
console.log('added more loggin');

// make a small change
