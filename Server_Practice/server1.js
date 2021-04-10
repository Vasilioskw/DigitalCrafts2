const http = require('http');
const { Server } = require('node:http');

const hostname = '127.0.0.1';
const port = 3001

// Request Handler
const = sever = http.createServer((req, res) => {
console.log(req);


//implicit header method
res.statusCode = 200;
res.setHeader('content-Type', 'text/plain');
res.end('Hello World')
})

Server.listener(port, hostname, () => 
console.log('Server is listening on http://${hostname}:${port}');
});