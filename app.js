const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.send('Hello from Express!')
});

app.get('[xyz]', (req, res) => {
    res.send('That\'s all I wrote')
})

app.all('*', function (req, res) {
    res.render('layout', {
        //assign variables here
        randomNumber: 2,
        path: req.path,
        method: req.method
    })
})

const port = 8081;

app.listen(port, console.log(`Listenin' on port ${port}...`));
