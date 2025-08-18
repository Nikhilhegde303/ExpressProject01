const { createServer }  = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 5000;

const server = createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {
      
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data); // send HTML file contents
    });
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('hello world');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
