const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.send('Hello from Express!')
});

app.get(/\/.*(xyz)/, (req, res) => {
    res.send('That\'s all I wrote.')
})

app.get("/capital-letters/:sub_dir", (req, res) => {

    // const something = /capital-letters(.+\/)/
    // console.log(req.path)
    // console.log(something)
    res.send(req.params.sub_dir.toUpperCase())
    // console.log(req.params)
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

//PHASE 5 STUFF
// app.get('/margot/:letters', (req, res) => {
//     const firstLetter = req.params.letters[0].toUpperCase();
//     res.send(firstLetter + req.params.letters.slice(1));
//  })

//  app.get('/margeaux/:letters', (req, res) => {
//     const firstLetter = req.params.letters[0].toUpperCase();
//     res.send(firstLetter + req.params.letters.slice(1));
//  })

// app.get('/about/foo', (req, res) => {
//     res.send(404);
//  });

//  app.all(/^\/[A-Za-z0-9\-_]*$/, (req, res) => {
//     //res.send("Something went wrong.");
//     const pageData = {
//        method: req.method,
//        path: req.path,
//        randomNumber: 5
//     };
//     res.render("layout", pageData);
//  });
