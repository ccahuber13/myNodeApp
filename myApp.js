let http = require('http');

let myNodeApp = http.createServer( (req, res) => {
    if (req.url == '/') {
        res.end('Page 1');
    }
    if (req.url == '/2') {
        res.end('Page 2');
    }
    if (req.url == '/3') {
        res.end('Page 3');
    }
    res.end(`Doesn't exist`);

});

myNodeApp.listen(3001);