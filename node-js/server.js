let http = require('http');

const port = 5000;
http.createServer((req, res) => {
    const { method, url } = req;
    let id = 1;
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    if (method === "GET" && url === "/products") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("Hello World!");
    } else if (method === "GET" && url === `/products/${id}`) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("Single product");
    } else if (method === "POST" && url === "/products") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("Add Products");
    } else if (method === "PUT" && url === `/products/${id}`) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("Update Products");
    } else if (method === "DELETE" && url === `/products/${id}`) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`Deleting product with id`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
    }
}).listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

