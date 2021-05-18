const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello from Express!')
});

const port = 8081;

app.listen(port, console.log(`Listenin' on port ${port}...`));
