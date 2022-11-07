let http = require('http');
let fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('indeax.html', (err, data) => {
    if (err) throw err;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf8');
    res.end(data)
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//Exemple 2

// let http = require('http');
// let fs = require('fs');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   fs.readFile('index.html', (err, data) => {
//     if (err) {
//       res.statusCode = 404;
//       res.setHeader('Content-Type', 'text/html; charset=utf8');
//       res.end('Ce fichier n\'existe pas')
//     } else {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'text/html; charset=utf8');
//       res.end(data)

//     }
//   })
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//exemple 3 utf8
// let http = require('http');
// let fs = require('fs');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   let message = 'Hello world !';
//   fs.readFile('index.html', 'utf8', (err, data) => {
//     if (err) {
//       res.statusCode = 404;
//       res.setHeader('Content-Type', 'text/html; charset=utf8');
//       res.end('Ce fichier n\'existe pas')
//     } else {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'text/html; charset=utf8');
//       data = data.replace('{{ message }}', message)
//       res.end(data)

//     }
//   })
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });