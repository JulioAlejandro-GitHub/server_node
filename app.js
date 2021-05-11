

var hbs = require('hbs');
const express = require('express');
const app = express();

require('dotenv').config();;

const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

/*
directorio publico, tienen prioridad sobre las rutas definidas

/Users/julio/Desktop/udemy/06-webserver/app.js
*/

// servir contenido estático
app.use(express.static('public/')); // Home Page
/*
app.get('/', (req, res) => {
    res.render('home', {
        autor:'Julio Morales Gutiérrez',
        titulo:'Curso de Node'
    });
});
app.get('/index', (req, res) => {
    res.render('home', {
        autor:'Julio Morales Gutiérrez',
        titulo:'Curso de Node'
    });
});
app.get('/generic', (req, res) => {
    res.render('generic');
});
app.get('/elements', (req, res) => {
    res.render('elements');
});
app.get('/path-test', (req, res) => {
    res.send('Page path-test')
});
*/
app.get('*', (req, res) => {
    //res.send('404 | Page not found')
    res.sendFile(__dirname + '/public/index.html'); // Home Page
});
app.listen( port, () => {
    console.log(`Servidor en pueto ${port}`);
});