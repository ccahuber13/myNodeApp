let express = require('express');
let myApp = express();

// Boiler plate code that should be included in all express apps.
// Enables user input from the req.body
myApp.use(express.urlencoded({extended: false}));

myApp.get('/', (req, res) => {
    res.send(`
    <form action="/answer" method="POST">
        <p>What color is the sky on a clear and sunny day?</p>
        <input name="skyColor" autocomplete="off">
        <button>Submit Answer</button>
    `);
});

myApp.post('/answer', (req, res) => {
    if (req.body.skyColor.toUpperCase() == 'BLUE') {
        res.send(`
        <p>Blue it is</p>
        <a href="/">Back</a>
        `);
    } else {
        res.send(`
        <p>Wrong</p>
        <a href="/">Back</a>
        `);
    }
});

myApp.get('/answer', (req, res) => {
    res.send('?');
});

myApp.listen(3001);