const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
const genreRouter = require('./Routes/genreRouter');
const movieRouter = require('./Routes/movieRouter');
app.use('/genre', genreRouter);//this path is my choice
app.use('/movie', movieRouter);//this path is my choice
/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});