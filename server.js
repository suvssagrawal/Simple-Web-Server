const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;

const serveFile = (res, filePath, contentType, statusCode = 200) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>500 - Internal Server Error</h1>');
        } else {
            res.writeHead(statusCode, { 'Content-Type': contentType });
            res.end(data);
        }
    });
};

http.createServer((req, res) => {
    const url = req.url.toLowerCase();
    if (url === '/' || url === '/home') {
        serveFile(res, path.join(__dirname, 'home.html'), 'text/html');
    } else if (url === '/about') {
        serveFile(res, path.join(__dirname, 'about.html'), 'text/html');
    } else if (url === '/contact') {
        serveFile(res, path.join(__dirname, 'contact.html'), 'text/html');
    } else if (url === '/style.css') {
        serveFile(res, path.join(__dirname, 'style.css'), 'text/css');
    } else {
        serveFile(res, path.join(__dirname, '404.html'), 'text/html', 404);
    }
}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
